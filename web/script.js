document.getElementById('schedule-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const subject = document.getElementById('subject').value;
    const topic = document.getElementById('topic').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    const response = await fetch('http://localhost:3000/api/schedules', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ subject, topic, date, time })
    });

    if (response.ok) {
        const schedule = await response.json();
        addScheduleToList(schedule);
    }
});

function addScheduleToList(schedule) {
    const list = document.getElementById('schedule-list');
    const item = document.createElement('li');
    item.textContent = `${schedule.subject} - ${schedule.topic} at ${schedule.date} ${schedule.time}`;
    list.appendChild(item);
}
