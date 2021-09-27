import React from "react"

import {
  Fragment,
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react"
import { Dialog, Transition } from "@headlessui/react"
import { ExclamationIcon } from "@heroicons/react/outline"
import  Question from "../components/question"

const QuestionsModal = forwardRef((props, ref) => {
  console.log(
    "all mode questions => ",
    props.allQuestions.allMarkdownRemark.edges
  )

  const [open, setOpen] = useState(false)
  const [countdownSeconds, setCountdownSeconds] = useState()
  const [countdownMinutes, setCountdownMinutes] = useState()
  const [timer, setTimer] = useState()

  useImperativeHandle(ref, () => ({
    openQuiz(value) {
      setOpen(true)
      countDown()
    },
  }))

  const cancelTest = () => {
    clearInterval(timer)
    setCountdownSeconds(0)
    setCountdownMinutes(0)
    setOpen(false)
  }

  const countDown = () => {
    let second = 0
    let minute = 0
    let timer = setInterval(() => {
      second++
      if (second % 60 == 0) {
        minute++
        second = 0
        setCountdownMinutes(minute)
      }
      if (minute == 3) {
        clearInterval(timer)
        cancelTest()
        return
      }
      setCountdownSeconds(second)
    }, 1000)
    setTimer(timer)
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={() => setOpen(true)}
      >
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 ">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className=" sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl lg:max-w-4xl xl:max-w-6xl w-full ">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 ">
                <div className="sm:flex sm:items-start sm:flex-col">
                  <div className="sm:flex sm:items-end">
                    <span class="font-mono text-6xl countdown">
                      <span style={{ "--value": countdownMinutes }}></span>:
                    </span>
                    <span class="font-mono text-6xl countdown">
                      <span style={{ "--value": countdownSeconds }}></span>
                    </span>
                  </div>
                  <div className="w-full sm:flex sm:items-start">
                  <Question></Question>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none   sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={cancelTest}
                >
                  Cancel Test
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
})

export default QuestionsModal
