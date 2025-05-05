export default function ReminderCard({ reminder, plantName }) {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 w-full">
            <h3 className="text-lg font-semibold text-green-700">{plantName}</h3>
            <p className="text-sm text-gray-600 capitalize">Task: {reminder.taskType}</p>
            <p className="text-sm text-gray-500">
                Date: {new Date(reminder.date).toLocaleString()}
            </p>
            {reminder.notes && (
                <p className="text-sm text-gray-500 mt-1">Note: {reminder.notes}</p>
            )}
        </div>
    );
}
