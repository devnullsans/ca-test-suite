import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";

const accept = ["image/jpeg", "image/png", "image/webp", "video/mp4"];

export default function Test() {
  const [dirs, setDirs] = useState(new Map());

  const onDrop = useCallback((acceptedFiles) => {
    const map = new Map();
    const addToMap = (key, file) => {
      if (map.has(key)) map.get(key).push(file);
      else map.set(key, [file]);
    };
    for (const file of acceptedFiles) {
      const path = file.webkitRelativePath;
      if (path === "") {
        addToMap(path, file);
      } else {
        const dirs = path.split("/");
        const key = dirs[dirs.length - 2];
        addToMap(key, file);
      }
    }
    setDirs(map);
  }, []);

  const { getRootProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
    accept: {
      "image/jpeg": [".jpg", ".jpeg"],
      "image/webp": [".webp"],
      "image/png": [".png"],
      "video/mp4": [".mp4"],
    },
  });

  const filesRef = useRef(null);
  const foldersRef = useRef(null);

  useEffect(() => {
    if (foldersRef.current !== null) {
      foldersRef.current.setAttribute("webkitdirectory", "");
      foldersRef.current.setAttribute("directory", "");
    }
  }, [foldersRef]);

  return (
    <div>
      <input
        ref={filesRef}
        type="file"
        onChange={(e) => onDrop(Array.from(e.target.files))}
        accept="image/jpeg, image/png, image/webp, video/mp4"
        multiple
      />
      <input
        ref={foldersRef}
        type="file"
        onChange={(e) => onDrop(Array.from(e.target.files).filter((file) => accept.includes(file.type)))}
        multiple
      />
      <div {...getRootProps({ style: { height: "128px", border: "1px solid" } })}>
        {isDragActive ? <p>Drop the files here ...</p> : <p>Drag 'n' drop some files here, or click to select files</p>}
      </div>
      {Array.from(dirs).map(([key, files]) => (
        <details
          key={key}
          style={{ margin: "1rem" }}>
          <summary>{key}</summary>
          <ul>
            {files.map((file, ix) => (
              <li key={ix}>
                {file.name} - {file.type} - {file.size}
              </li>
            ))}
          </ul>
        </details>
      ))}
    </div>
  );
}
