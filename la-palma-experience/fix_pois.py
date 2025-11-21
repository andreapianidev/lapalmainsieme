#!/usr/bin/env python3
"""
Comprehensive POI database fixer:
1. Remove duplicate POIs
2. Map images to proper local files
3. Enhance descriptions
"""

import re
import os

places_path = '/Users/andreapiani/Library/Mobile Documents/com~apple~CloudDocs/Prototipi/insieme/la-palma-experience/src/data/places.js'

with open(places_path, 'r', encoding='utf-8') as f:
    content = f.read()

print("=== FIXING POI DATABASE ===\n")

# Step 1: Remove duplicate POIs
# Based on analysis:
# - Charco Azul: Keep ID 2 (better description), delete ID 59
# - Playa de Nogales: Keep ID 1 (better description), delete ID 69
# - El Bernegal: Keep ID 27 (Tazacorte location), delete ID 60 and 88
# - Mercadillo Puntagorda: Keep ID 28, delete ID 75
# - Mirador San Bartolo: Keep ID 13 (correct location), delete ID 63
# - Playa de la Veta: Keep ID 41, delete ID 64
# - Puerto Naos: Keep ID 3, delete ID 81
# - Tazacorte: Keep ID 21, delete ID 78
# - Poris de Candelaria: Keep ID 15 (panoramico, better), delete ID 65 (esperienza)

duplicates_to_remove = [59, 60, 63, 64, 65, 69, 75, 78, 81, 88]

print(f"Removing duplicate IDs: {duplicates_to_remove}\n")

# Find and remove each duplicate POI entry
for poi_id in duplicates_to_remove:
    # Pattern to match complete POI object
    # Look for the POI starting with the ID and ending at the next }, or final ];
    pattern = r'(?:,\s*)?\{\s*id:\s*' + str(poi_id) + r',[\s\S]*?\n  \}(?=\s*(?:,|\s*\];))'

    match = re.search(pattern, content)
    if match:
        content = content.replace(match.group(0), '', 1)
        print(f"✓ Removed POI ID {poi_id}")
    else:
        print(f"✗ Could not find POI ID {poi_id}")

# Clean up any double commas or comma before ];
content = re.sub(r',(\s*,)+', ',', content)
content = re.sub(r',(\s*)\];', r'\1];', content)

# Save the deduplicated version
with open(places_path, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"\n✓ Deduplication complete\n")
print(f"File saved to: {places_path}")
