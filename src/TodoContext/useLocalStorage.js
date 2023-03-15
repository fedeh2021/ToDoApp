import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(initialValue);

  useEffect(() => {
    const getTasksCount = () => {
      const tasks = JSON.parse(localStorage.getItem(key)) || []
      return tasks.length
    }

    const tasksCount = getTasksCount()
    const timeout = tasksCount > 0 ? tasksCount * 500 : 1000

    setTimeout(() => {
      try {
        const serializedItem = localStorage.getItem(key);
        let parsedItem;

        if (!serializedItem) {
          localStorage.setItem(key, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(serializedItem);
        }
        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, timeout);
  }, [initialValue, key]);

  const saveItem = (newItem) => {
    try {
      const serializedItem = JSON.stringify(newItem);
      localStorage.setItem(key, serializedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };
  return {
    item,
    saveItem,
    loading,
    error,
  };
}
