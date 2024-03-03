import Image from "next/image";
import React from "react";
import {CustomFilter, Hero, SearchBar} from "@/components";
import {fetchCars} from "@/utils";
import {all} from "axios";


export default async function Home() {
    const allCars = await fetchCars()

    const isDataEmpty = !Array.isArray(allCars) || allCars.length <0 || !allCars

    console.log(allCars)
    return (
        <main className="overflow-hidden">
            <Hero/>
            <div className="mt-12 padding-x padding-y max-width" id="discover">
              <div className="home__text-container">
                <h1 className="text-4xl font-extrabold">
                  Car Catalogue
                </h1>
                <p>Explore the cars you might like</p>
              </div>
              <div className="home__filters">
                <SearchBar />
                <div className="home__filter-container">
                  <CustomFilter />
                  <CustomFilter />
                </div>
              </div>

                {allCars ? (
                    <section>
                        we have cars
                    </section>
                ):(
                    <div className="home__error-container">
                        <h2 className="text-black text-xl font-bold">Oops, no results</h2>
                    </div>
                )}
            </div>
        </main>
    );
}
