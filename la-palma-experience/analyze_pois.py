#!/usr/bin/env python3
import os
import re
import json

# Read the places.js file
places_path = '/Users/andreapiani/Library/Mobile Documents/com~apple~CloudDocs/Prototipi/insieme/la-palma-experience/src/data/places.js'

with open(places_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Extract POI objects using regex
poi_pattern = r'\{\s*id:\s*(\d+),\s*name:\s*"([^"]+)",\s*type:\s*"([^"]+)"[^}]*image:\s*"([^"]*)"'
matches = re.findall(poi_pattern, content)

print('=== POI DATABASE ANALYSIS ===\n')
print(f'Total POIs found: {len(matches)}\n')

# Organize by type
by_type = {}
for poi_id, name, poi_type, image in matches:
    if poi_type not in by_type:
        by_type[poi_type] = []
    by_type[poi_type].append({
        'id': int(poi_id),
        'name': name,
        'image': image
    })

print('POIs by type:')
for poi_type in sorted(by_type.keys()):
    print(f'  {poi_type}: {len(by_type[poi_type])}')

print('\n=== IMAGE ANALYSIS ===\n')

local_images = []
unsplash_images = []
no_image = []

for poi_id, name, poi_type, image in matches:
    if image.startswith('/images/'):
        local_images.append((poi_id, name, poi_type, image))
    elif 'unsplash.com' in image:
        unsplash_images.append((poi_id, name, poi_type))
    else:
        no_image.append((poi_id, name, poi_type))

print(f'POIs with local images: {len(local_images)}')
print(f'POIs with Unsplash images: {len(unsplash_images)}')
print(f'POIs without images: {len(no_image)}\n')

print('POIs using Unsplash (need local images):')
for poi_id, name, poi_type in unsplash_images:
    print(f'  ID {poi_id}: {name} ({poi_type})')

print('\n=== DUPLICATE NAMES ===\n')

# Check for duplicate names
name_map = {}
for poi_id, name, poi_type, image in matches:
    if name not in name_map:
        name_map[name] = []
    name_map[name].append(int(poi_id))

duplicates = {name: ids for name, ids in name_map.items() if len(ids) > 1}
print(f'Potential duplicates found: {len(duplicates)}\n')
for name, ids in sorted(duplicates.items()):
    print(f'  "{name}": IDs {ids}')

print('\n=== AVAILABLE LOCAL IMAGES ===\n')

images_dir = '/Users/andreapiani/Library/Mobile Documents/com~apple~CloudDocs/Prototipi/insieme/la-palma-experience/public/images'
if os.path.exists(images_dir):
    image_files = sorted([f for f in os.listdir(images_dir) if f.endswith(('.jpg', '.jpeg', '.png', '.webp'))])
    print(f'Total image files available: {len(image_files)}\n')

    used_images = {image.split('/')[-1] for _, _, _, image in matches if image.startswith('/images/')}

    for file in image_files:
        status = '✓ USED' if file in used_images else '✗ NOT USED'
        # Find which POI uses it
        poi_using = None
        for poi_id, name, poi_type, image in matches:
            if image.endswith(file):
                poi_using = f'by "{name}" (ID {poi_id})'
                break

        print(f'  {file} - {status} {poi_using if poi_using else ""}')

print('\n=== POIS BY TYPE (with image status) ===\n')

for poi_type in sorted(by_type.keys()):
    print(f'\n{poi_type.upper()}:')
    for poi in sorted(by_type[poi_type], key=lambda x: x['id']):
        if poi['image'].startswith('/images/'):
            status = '✓'
        elif 'unsplash.com' in poi['image']:
            status = '⚠'
        else:
            status = '✗'
        print(f'  {status} ID {poi["id"]}: {poi["name"]}')
