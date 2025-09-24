import { Charts } from "@/components/Charts";
import { PizzaChart } from "@/components/PizzaChart";
import { RadialChart } from "@/components/RadialChart";


export default function Dashboard() {
  return (
    <div className="p-6 flex-1 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Bem-vindo ao Dashboard</h1>
      <div className="grid grid-cols-2 gap-2">
        <Charts />
        <PizzaChart />
        <RadialChart />
        </div>
    </div>
  );
}
