import { useState } from "react"
import { useUser } from "../hooks/useUser"

export default function UploadPatientFile() {
  const [selectedFile, setSelectedFile] = useState(null)
  const { uploadUserFile } = useUser()

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0])

  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (selectedFile) {
      const success: boolean = await uploadUserFile(selectedFile)
      console.log(success ? "yay it worked" : "uhoh buddy")
    }
  }

  return (
    <div className="h-screen flex justify-center items-center align-middle ">
      <form onSubmit={handleSubmit} className=" card bg-white shadow-xl border border-base-300 p-6 w-1/3 h-1/4">
        <div className="flex flex-col justify-center">
          <h1 className="text-center font-bold text-2xl"> Upload patient file (csv) </h1>
          <input className="my-4 relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-primary bg-transparent bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-black transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:me-3 file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-e file:border-solid file:border-inherit file:bg-transparent file:px-3  file:py-[0.32rem] file:text-black focus:border-primary focus:text-gray-700 focus:shadow-inset focus:outline-none" type='file' onChange={handleFileChange} />
          <button className="w-1/3 bg-primary text-white rounded-full self-center py-2">Upload File</button>
        </div>
      </form>
    </div >

  )
}
