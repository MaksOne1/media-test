'use client'
import ReactPlayer from 'react-player'
import React from "react";
import {Media, Video } from '@vidstack/player-react';

export default function Page() {
  return <div>
    mkv
    <Media>
      <Video loading="visible" controls preload="true">
        <video loading="visible" src="http://92.246.136.177/YLHjtVpwG1NrWLAVng0wCRSIuV3dmX.mkv" preload="none" data-video="0" controls />
      </Video>
    </Media>
    mp4
    <Media>
      <Video loading="visible" controls preload="true">
        <video loading="visible" src="http://92.246.136.177/kTsSHuNQ40YfmuEEbOer7RXLSkDTMB.mp4" preload="none" data-video="0" controls />
      </Video>
    </Media>
    mkv2
    <Media>
      <Video loading="visible" controls preload="true">
        <video loading="visible" src="http://92.246.136.177/0Nd7uoIqOi9dmlPmXkECADKK1eOinH.mkv" preload="none" data-video="0" controls />
      </Video>
    </Media>
  </div>
}