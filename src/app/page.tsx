'use client'
import React from "react";
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import {defaultLayoutIcons, DefaultVideoLayout} from "@vidstack/react/player/layouts/default";

export default function Page() {
  return <div>
      <MediaPlayer title="Sprite Fight" src="http://92.246.136.177/0Nd7uoIqOi9dmlPmXkECADKK1eOinH.mp4">
      <MediaProvider />
      <DefaultVideoLayout thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt" icons={defaultLayoutIcons} />
</MediaPlayer>
  <MediaPlayer title="Sprite Fight" src="http://92.246.136.177/kTsSHuNQ40YfmuEEbOer7RXLSkDTMB.mp4">
    <MediaProvider />
    <DefaultVideoLayout thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt" icons={defaultLayoutIcons} />
  </MediaPlayer>
  <MediaPlayer title="Sprite Fight" src="http://92.246.136.177/0Nd7uoIqOi9dmlPmXkECADKK1eOinH.mp4">
    <MediaProvider />
    <DefaultVideoLayout thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt" icons={defaultLayoutIcons} />
  </MediaPlayer>
</div>

}