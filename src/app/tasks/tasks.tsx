import "./task.css"

type TaskType = {
    status: string,
    severity: string,
    location: string,
    otp: string,
    description?: string
}

export default function Task({status, severity, location, otp, description}: TaskType) {
    return (
        <div className="taskCard">
            <div><span className="taskKey">status:</span> {status}</div>
            <div><span className="taskKey">severity:</span> {severity}</div>
            <div><span className="taskKey">location:</span> {location}</div>
            <div><span className="taskKey">otp:</span> {otp}</div>
            <div><span className="taskKey">description:</span> {description}</div>
            {status === "ACTIVE" && (
                <button>SWITCH ON</button>
            )}
        </div>
    )
}