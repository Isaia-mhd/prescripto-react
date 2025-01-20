import { useState } from "react";
import { RotateSpinner } from "react-spinners-kit";
export default function Loading() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-black bg-opacity-50 flex items-center justify-center fixed right-0 left-0 bottom-0 top-0 z50" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <RotateSpinner size={45} color="#00ff89" loading={loading} />
    </div>
  );
}
