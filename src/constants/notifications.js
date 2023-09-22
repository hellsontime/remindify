const notifications = [
  {
    id: 1,
    title: 'New Message',
    description: 'You have a new message from John.',
    timestamp: new Date().toISOString()
  },
  {
    id: 2,
    title: 'Reminder',
    description: "Don't forget to attend the meeting at 2 PM.",
    timestamp: new Date(new Date().getTime() - 3 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 3,
    title: 'Task Completed',
    description: 'You have successfully completed a task.',
    timestamp: new Date(new Date().getTime() - 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 4,
    title: 'Payment Reminder',
    description: 'Your monthly subscription will renew soon.',
    timestamp: new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000).toISOString()
  }
];

export default notifications;
