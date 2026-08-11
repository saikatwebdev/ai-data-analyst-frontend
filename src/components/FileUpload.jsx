import { useState } from "react";
import { Upload } from "lucide-react";
import { uploadDataset } from "../services/api";

function FileUpload({ onUploadSuccess }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    setError("");
    setLoading(true);

    try {
      const data = await uploadDataset(file);

      onUploadSuccess(data);
    } catch (err) {
      console.error(err);

      setError(
        err.response?.data?.detail ||
        "Failed to upload dataset."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <label>
        <Upload size={20} />
        <br />

        <span>
          {loading
            ? "Analyzing..."
            : "Upload CSV / Excel"}
        </span>

        <input
          type="file"
          accept=".csv,.xlsx,.xls"
          onChange={handleFileChange}
          hidden
        />
      </label>

      {error && (
        <p>{error}</p>
      )}
    </div>
  );
}

export default FileUpload;