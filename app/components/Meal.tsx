"use client";
import { useState } from "react";
import { mealData } from "../data/data";
import { ArrowRight } from "lucide-react";
export default function Meal() {
  const [currentMeal, setCurrentMeal] = useState(mealData);
  const filterMeal = (Category: string) => {
    return setCurrentMeal(
      mealData.filter((meal) => meal.category === Category),
    );
  };
  return (
    <div className="mt-10 max-w-400 m-auto">
      <h1 className="text-2xl text-center text-orange-500 font-bold mb-5">
        Algerian Plates
      </h1>
      <div className="flex flex-col lg:flex-row justify-center">
        <div className="flex justify-center">
          <button
            onClick={() => setCurrentMeal(mealData)}
            className="border rounded-3xl px-3 m-3   border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700  "
          >
            All
          </button>
          <button
            onClick={() => filterMeal("pizza")}
            className="border rounded-3xl px-3 m-3  border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 "
          >
            Plates
          </button>
          <button
            onClick={() => filterMeal("salty")}
            className="border rounded-3xl px-3 m-3  border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 "
          >
            Salty
          </button>
          <button
            onClick={() => filterMeal("sugary")}
            className="border rounded-3xl px-3 m-3  border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 "
          >
            Sugars
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6">
        {currentMeal.map((meal) => {
          return (
            <div
              key={meal.id}
              className="border-none hover:scale-105 duration-300 "
            >
              <img
                src={meal.image}
                alt={meal.name}
                className="object-cover w-full h-50 rounded-lg "
              />
              <div className="flex px-4 justify-between py-2">
                <p className="font-bold">{meal.name}</p>
                <p className="bg-orange-700 rounded-full h-16 text-md w-16 -mt-10 text-white py-4 px-1 border-4 border-gray-200">
                  {meal.price}
                </p>
              </div>
              <div className="pl-5 py-2 -mt-2">
                <p className="flex items-center text-indigo-600">
                  View More <ArrowRight className="w-6 pl-2" />
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
