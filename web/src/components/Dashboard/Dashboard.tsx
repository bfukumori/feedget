import { Feedback } from "../../App";
import { Card } from "./Card";

interface DashboardProps {
  feedbacks: Feedback[];
}

export function Dashboard({feedbacks}:DashboardProps) {
  return (
    <>
    <div className="flex gap-5 flex-wrap max-w-7xl mx-auto p-2 sm:p-6 lg:p-8">
      {feedbacks.map(feedback=> <Card feedback={feedback} key={feedback.id} />)}
    </div>
    </>
  )
}