/**
 * Generate an iCal (.ics) file for an itinerary
 * @param {Object} itinerary - The itinerary object
 * @returns {string} iCal file content
 */
export const generateICSFile = (itinerary) => {
  const now = new Date();
  const timestamp = now.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

  // Calculate a default start date (7 days from now)
  const startDate = new Date();
  startDate.setDate(startDate.getDate() + 7);

  // Format date for iCal (YYYYMMDD)
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}${month}${day}`;
  };

  // Build iCal content
  let icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//La Palma Experience//Itinerary//IT',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'X-WR-CALNAME:' + itinerary.title,
    'X-WR-TIMEZONE:Atlantic/Canary',
  ];

  // If itinerary has days, create events for each day
  if (itinerary.days && itinerary.days.length > 0) {
    itinerary.days.forEach((day, idx) => {
      const eventDate = new Date(startDate);
      eventDate.setDate(eventDate.getDate() + idx);

      const eventId = `${itinerary.id}-day${day.day}-${timestamp}`;
      const dateStr = formatDate(eventDate);

      // Description with activities
      let description = day.activities
        .map(
          (activity) =>
            `${activity.time} - ${activity.description} (${activity.duration})`
        )
        .join('\\n');

      icsContent.push(
        'BEGIN:VEVENT',
        `UID:${eventId}@lapalmexperience.com`,
        `DTSTAMP:${timestamp}`,
        `DTSTART;VALUE=DATE:${dateStr}`,
        `DTEND;VALUE=DATE:${dateStr}`,
        `SUMMARY:${itinerary.title} - ${day.title}`,
        `DESCRIPTION:${description}`,
        `LOCATION:La Palma, Canary Islands`,
        'STATUS:CONFIRMED',
        'SEQUENCE:0',
        'END:VEVENT'
      );
    });
  } else {
    // Single event for the whole itinerary
    const eventId = `${itinerary.id}-${timestamp}`;
    const dateStr = formatDate(startDate);

    icsContent.push(
      'BEGIN:VEVENT',
      `UID:${eventId}@lapalmexperience.com`,
      `DTSTAMP:${timestamp}`,
      `DTSTART;VALUE=DATE:${dateStr}`,
      `DTEND;VALUE=DATE:${dateStr}`,
      `SUMMARY:${itinerary.title}`,
      `DESCRIPTION:${itinerary.description.replace(/\n/g, '\\n')}\\n\\nDurata: ${itinerary.totalDuration}\\nDifficoltà: ${itinerary.difficulty}`,
      `LOCATION:La Palma, Canary Islands`,
      'STATUS:CONFIRMED',
      'SEQUENCE:0',
      'END:VEVENT'
    );
  }

  icsContent.push('END:VCALENDAR');

  return icsContent.join('\r\n');
};

/**
 * Download the ICS file
 * @param {Object} itinerary - The itinerary object
 */
export const downloadICSFile = (itinerary) => {
  const icsContent = generateICSFile(itinerary);
  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = `${itinerary.id}-lapalma.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
};
