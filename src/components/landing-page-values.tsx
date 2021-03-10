import React from "react"
import { Heading } from "./heading"
import { SegmentWrapper } from "./segment-wrapper"

export const LandingPageValues: React.FunctionComponent = () => {
  return (
    <div className="bg-white">
      <SegmentWrapper>
        <div className="px-4">
          <div className="max-w-screen-lg mx-auto">
            <Heading level={3}>
              We don't make handstand training complicated
            </Heading>
            <p className="text-xl font-light font-body my-4">
              Let us take the hard work out of progress tracking and workout
              planning, so you can focus on achieving your handstand goals. With
              Handstand Journey you can:
            </p>
            <ul className="list-disc list-inside">
              <li className="text-xl font-light font-body my-2">
                Choose a goal
              </li>
              <li className="text-xl font-light font-body my-2">
                Follow a pre-designed program
              </li>
              <li className="text-xl font-light font-body my-2">
                Follow along to workouts
              </li>
              <li className="text-xl font-light font-body my-2">
                Learn the exercises
              </li>
              <p className="text-xl font-light font-body my-4">
                You can download our easy-to-use app on the{" "}
                <a className="font-medium text-red" href="">
                  Play store
                </a>
                . We're currently working hard on bringing out an iOS app.
              </p>
            </ul>
          </div>
        </div>
      </SegmentWrapper>
    </div>
  )
}
