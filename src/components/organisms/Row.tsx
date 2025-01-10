import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import Image from 'next/image';

const Row = ({
  title,
  items,
}: {
  title: string;
  items: Array<{
    id: number;
    title: string;
    subject: string;
    thumbnail: string;
  }>;
}) => (
  <div className="mb-8">
    <h2 className="text-xl font-semibold mb-4 text-white px-4">{title}</h2>
    <div className="relative group">
      <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full hidden group-hover:block z-10">
        <ChevronLeft className="text-white" />
      </button>
      <div className="flex overflow-x-auto gap-2 px-4 pb-4 hide-scrollbar">
        {items.map((item) => (
          <div key={item.id} className="flex-none w-64 relative group/item">
            <Image
              width={300}
              height={200}
              src={item.thumbnail}
              alt={item.title}
              className="rounded w-full object-cover transform transition-transform duration-300 group-hover/item:scale-105"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.subject}</p>
                <button className="mt-3 bg-white text-black px-4 py-2 rounded-full flex items-center gap-2">
                  <Play className="w-4 h-4" /> Play
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full hidden group-hover:block z-10">
        <ChevronRight className="text-white" />
      </button>
    </div>
  </div>
);

export default Row;
