"use client"

import { useSession } from "next-auth/react";
import Image from "next/image";
import Login from "../components/Login";

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      {
        session?.user ?
          (
            <div className="container mx-auto mt-10 p-8 rounded-xl bg-white border border-[#E2E2EA]" >
              <div className="flex justify-end gap-4 mb-8">
                <button type="button" className="flex bg-[#0062FF] text-white px-[10px] py-2 rounded-[10px] hover:bg-[#274A7F]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                  Add new task</button>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full table-auto">
                  <thead>
                    <tr className="bg-[#FAFAFB] text-[#44444F]">
                      <th className="px-4 py-2 border-b w-[30%]">Nama Task</th>
                      <th className="px-4 py-2 border-b">Due Date</th>
                      <th className="px-4 py-2 border-b">PIC</th>
                      <th className="px-4 py-2 border-b">Status</th>
                      <th className="px-4 py-2 border-b">Note</th>
                      <th className="px-4 py-2 border-b">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="px-4 py-2">Task 1</td>
                      <td className="px-4 py-2">2025-02-20</td>
                      <td className="px-4 py-2">John Doe</td>
                      <td className="px-4 py-2">
                        <span className="inline-block px-3 py-1 text-white bg-[#3DD598] rounded-full">Completed</span>
                      </td>
                      <td className="px-4 py-2">Task completed successfully</td>
                      <td className="px-4 py-2">
                        <button className="text-blue-500 hover:text-blue-700">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                          </svg>

                        </button>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-2">Task 2</td>
                      <td className="px-4 py-2">2025-02-22</td>
                      <td className="px-4 py-2">Jane Smith</td>
                      <td className="px-4 py-2">
                        <span className="inline-block px-3 py-1 text-white bg-[#FFA624] rounded-full">In Progress</span>
                      </td>
                      <td className="px-4 py-2">Ongoing task, working on it</td>
                      <td className="px-4 py-2">
                        <button className="text-blue-500 hover:text-blue-700">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                          </svg>

                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Task 3</td>
                      <td className="px-4 py-2">2025-02-25</td>
                      <td className="px-4 py-2">Mark Lee</td>
                      <td className="px-4 py-2">
                        <span className="inline-block px-3 py-1 text-white bg-[#FC5A5A] rounded-full">Pending</span>
                      </td>
                      <td className="px-4 py-2">Waiting for resources</td>
                      <td className="px-4 py-2">
                        <button className="text-blue-500 hover:text-blue-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          ) : <Login />
      }

    </>

  );
}
