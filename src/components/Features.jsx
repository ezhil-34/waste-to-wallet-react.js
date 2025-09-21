import { RefreshCcw, Award, Gift } from "lucide-react";
import coin from "../assets/icons8-coin-48.png";

export default function Features() {

    return(
        <section className="flex flex-wrap mt-24 justify-center gap-6 sm:gap-8 py-14 px-6 sm:px-12">
            <FeatureCard color="blue" icon={<RefreshCcw className="text-blue-500 w-6 h-6 " />} title = "Easy Upload" text="Simply snap a photo of your recyclable waste and categorize it" />
             <FeatureCard color="green" icon={<Award className="text-green-500 w-6 h-6 " />} title = "Smart Verification" text=" Our AI-powered system verifies your submissions and calculates rewards" />
              <FeatureCard color="yellow" icon={<img src={coin} alt="coin" className="w-6 h-6" />} title = "Earn Points" text=" Get rewards with points for every verified waste submission" />
               <FeatureCard color="purple" icon={<Gift className="text-purple-500 w-6 h-6 " />} title = "Redeem Rewards" text="Use your points for gift cards, cash or donations to charity" />

        </section>
    );
}

const colorMap ={

    blue: {border: "border-blue-500", bg: "bg-blue-200", shadow: "hover:shadow-blue-500"},
     green: {border: "border-green-500", bg: "bg-green-200", shadow: "hover:shadow-green-500"},
      yellow: {border: "border-yellow-500", bg: "bg-yellow-200", shadow: "hover:shadow-yellow-500"},
       purple: {border: "border-purple-500", bg: "bg-purple-200", shadow: "hover:shadow-purple-500"}

}

function FeatureCard({ color, icon, title, text}){

    const {border, bg, shadow } = colorMap[color] || colorMap.blue;

    return(
        <div className={`w-full sm:w-80 p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-md border ${border} border-l-8 ${border} ${shadow} hover:shadow-2xl transition`}>
            <div className={`flex items-center justify-center w-12 h-12 rounded-full ${bg} mb-4`}>
                {icon}
            </div>
            <h4 className="text-lg font-bold dark:text-white mb-2">{title}</h4>
            <p className="text-gray-600 text-l dark:text-gray-200">{text}</p>
        </div>
    );
}