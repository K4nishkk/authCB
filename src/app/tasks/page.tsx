import Task from "./tasks";

export default function TaskPage() {
    return (
        <div className="taskPage">
            <Task status="ACTIVE" severity="HIGH" location="12.6745N 74.6624W" otp="549137" description="line to ground fault"/>
            <Task status="INACTIVE" severity="MEDIUM" location="54.6541N 55.5845W" otp="342353" description=""/>
            <Task status="INACTIVE" severity="LOW" location="54.8976N 34.3242W" otp="352352" description="line to line to ground fault"/>
        </div>
    )
}
