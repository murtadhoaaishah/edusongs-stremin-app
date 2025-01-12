"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Play, Info } from "lucide-react";
import Row from "@/components/organisms/Row";
import { categories, songs } from "@/data";
import Button from "@/components/atoms/Button";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const [currentCategory, setCurrentCategory] = useState("all");

  const router = useRouter();

  const isLoggedIn = localStorage.getItem("auth");

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed w-full z-50 bg-gradient-to-b from-black/80 to-transparent px-4 py-4">
        <div className="flex items-center">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold text-red-600">EduSongs</h1>
            <div className="hidden md:flex gap-6">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`text-sm ${
                    currentCategory === category.id
                      ? "font-bold"
                      : "text-gray-300"
                  }`}
                  onClick={() => setCurrentCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          <p className="flex-grow" />
          {isLoggedIn ? (
            <div className="flex gap-2">
              <button
                onClick={() => {
                  localStorage.removeItem("auth");
                  router.push("/");
                }}
                className="text-sm"
              >
                Logout
              </button>
              <Button
                label="Dashboard"
                outlined={true}
                onClick={() => router.push("/dashboard")}
              />
            </div>
          ) : (
            <div className="flex gap-2">
              <Button
                label="Sign up"
                onClick={() => router.push("/auth/signup")}
              />
              <Button
                label="Login"
                onClick={() => router.push("/auth/login")}
              />
            </div>
          )}
        </div>
      </nav>

      <div className="relative h-screen">
        <Image
          width={1200}
          height={600}
          src={songs.featured.thumbnail}
          alt={songs.featured.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent">
          <div className="absolute bottom-32 left-12 max-w-xl mx-12">
            <h1 className="text-5xl font-bold mb-4">{songs.featured.title}</h1>
            <p className="text-lg mb-6">{songs.featured.description}</p>
            <div className="flex gap-4">
              <button className="bg-white text-black px-8 py-3 rounded flex items-center gap-2 hover:bg-white/90">
                <Play className="w-5 h-5" /> Play
              </button>
              <button className="bg-gray-500/70 text-white px-8 py-3 rounded flex items-center gap-2 hover:bg-gray-500/50">
                <Info className="w-5 h-5" /> More Info
              </button>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="border px-2 py-1 text-sm">
                {songs.featured.rating}
              </span>
              <span className="text-sm text-gray-400">
                {songs.featured.duration}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="  mx-20">
        <Row title="Trending Now" items={songs.trending} />
        <Row title="Popular in Your Grade" items={songs.popular} />
        <Row title="Trending Now" items={songs.trending} />
        <Row title="Popular in Your Grade" items={songs.popular} />
      </div>
    </div>
  );
};

export default HomePage;
