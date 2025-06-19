"use client"

import { createContext, useContext, useEffect, useState } from "react"
import io from "socket.io-client"
import toast from "react-hot-toast"

const SocketContext = createContext()

export const useSocket = () => {
  const context = useContext(SocketContext)
  if (!context) {
    throw new Error("useSocket must be used within a SocketProvider")
  }
  return context
}

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null)
  const [connected, setConnected] = useState(false)

  useEffect(() => {
    const newSocket = io(import.meta.env.VITE_API_URL || "http://localhost:5000/api")

    newSocket.on("connect", () => {
      setConnected(true)
      toast.success("Connected to server")
    })

    newSocket.on("disconnect", () => {
      setConnected(false)
      toast.error("Disconnected from server")
    })

    newSocket.on("import-progress", (data) => {
      toast.success(`Import progress: ${data.progress}%`)
    })

    newSocket.on("import-completed", (data) => {
      toast.success(`Import completed: ${data.totalImported} jobs processed`)
    })

    newSocket.on("import-failed", (data) => {
      toast.error(`Import failed: ${data.error}`)
    })

    setSocket(newSocket)

    return () => {
      newSocket.close()
    }
  }, [])

  return <SocketContext.Provider value={{ socket, connected }}>{children}</SocketContext.Provider>
}
