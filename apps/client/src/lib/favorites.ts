import { useEffect, useState } from "react";

const KEY = "petcare-favorites";
const listeners = new Set<() => void>();

function read(): string[] {
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? '["meera-iyer"]');
  } catch {
    return [];
  }
}

export function useFavorites() {
  const [ids, setIds] = useState<string[]>([]);
  useEffect(() => {
    const sync = () => setIds(read());
    sync();
    listeners.add(sync);
    return () => void listeners.delete(sync);
  }, []);
  const toggle = (id: string) => {
    const cur = read();
    const next = cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id];
    localStorage.setItem(KEY, JSON.stringify(next));
    listeners.forEach((l) => l());
    return next.includes(id);
  };
  return { ids, toggle, has: (id: string) => ids.includes(id) };
}
