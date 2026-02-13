'use client';
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [joke, setJokes] = useState<any[]>([]);

  useEffect(() => {
    // Here I directly call becuse i set route in next.config.ts as proxy router otherwise it will give CORS error
    axios.get('/api/jokes').then((res) => {
      console.log("data", res);
      setJokes(res.data);
    })
      .catch(err => console.error(err));
  }, []);

  return (
    <main className="min-h-screen text-slate-100 items-center justify-center font-sans bg-slate-900 py-14 max-w-screen mx-auto">
      <h1 className="text-white text-center text-4xl font-extrabold">Hello I am Frontend</h1>
      <p className="text-3xl font-medium text-center py-10">Total Joke : {joke?.length}</p>
      <div className=" ">
        <div className="border rounded-xl p-5 max-w-4xl mx-auto">
          {
            joke?.map((joke) => (
              <ul key={joke.id} className="text-lg my-8">
                <li className="text-yellow-100">Joke no <span>{joke.id}</span> - <span className="text-green-500">{joke.joke}</span></li>
                <p className="text-base">Author : <span className="text-indigo-400 text-lg">{joke.author}</span></p>
              </ul>
            ))
          }
        </div>
      </div>
    </main>
  );
}
