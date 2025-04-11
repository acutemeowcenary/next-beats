import {
  Cloud,
  Wind,
  Coffee,
  Flame,
  Bird,
  Radio,
  Keyboard,
  Car,
  Waves,
} from 'lucide-react'
import { Channel, SoundEffect } from '@/types/lofi'

export const DEFAULT_CHANNELS: Channel[] = [
  {
    name: 'lofi hip hop radio',
    url: 'https://www.youtube.com/watch?v=jfKfPfyJRdk',
    description: 'beats to relax/study to',
    creator: 'Lofi Girl',
  },
  {
    name: 'lofi hip hop radio',
    url: 'https://www.youtube.com/watch?v=28KRPhVzCus',
    description: 'beats to sleep/chill to',
    creator: 'Lofi Girl',
  },
  {
    name: 'synthwave radio',
    url: 'https://www.youtube.com/watch?v=4xDzrJKXOOY',
    description: 'beats to chill/game to',
    creator: 'Lofi Girl',
  },
  {
    name: 'asian lofi radio',
    url: 'https://www.youtube.com/watch?v=Na0w3Mz46GA',
    description: 'beats to relax/study to',
    creator: 'Lofi Girl',
  },
  {
    name: 'dark ambient radio',
    url: 'https://www.youtube.com/watch?v=S_MOd40zlYU',
    description: 'music to escape/dream to',
    creator: 'Lofi Girl',
  },
  {
    name: 'beats to chill/study to',
    url: 'https://www.youtube.com/watch?v=HuFYqnbVbzY',
    description: 'beats to chill/study to',
    creator: 'Lofi Girl',
  },
  {
    name: 'Chillhop Radio',
    url: 'https://www.youtube.com/watch?v=5yx6BWlEVcY',
    description: 'jazzy & lofi hip hop beats',
    creator: 'Chillhop Music',
  },
  {
    name: 'GHIBLI Jazz',
    url: 'https://www.youtube.com/watch?v=7lq6e4Lu4B8',
    description: 'jazzy/piano ghibli',
    creator: 'Jazzne',
  },
]

export const channels: Channel[] = [...DEFAULT_CHANNELS]

export const soundEffects: SoundEffect[] = [
  {
    id: 'rain',
    name: 'Rain',
    file: 'https://www.youtube.com/watch?v=mPZkdNFkNps',
    icon: Cloud,
  },
  {
    id: 'fire',
    name: 'Fireplace',
    file: 'https://www.youtube.com/watch?v=L_LUpnjgPso',
    icon: Flame,
  },
  {
    id: 'cafe',
    name: 'Cafe Ambiance',
    file: 'https://www.youtube.com/watch?v=h2zkV-l_TbY',
    icon: Coffee,
  },
  {
    id: 'wind',
    name: 'Wind',
    file: 'https://youtu.be/sGkh1W5cbH4?si=L3aMNvyIYASQlYll',
    icon: Wind,
  },
  {
    id: 'birds',
    name: 'Birds',
    file: 'https://www.youtube.com/watch?v=Qm846KdZN_c',
    icon: Bird,
  },
  {
    id: 'keyboard',
    name: 'Keyboard',
    file: 'https://youtu.be/-2RiNR2fqRY?si=Er2L4D8MufctAgeE',
    icon: Keyboard,
  },
  {
    id: 'city',
    name: 'City Traffic',
    file: 'https://www.youtube.com/watch?v=8s5H76F3SIs',
    icon: Car,
  },
  {
    id: 'waves',
    name: 'Ocean Waves',
    file: 'https://www.youtube.com/watch?v=bn9F19Hi1Lk',
    icon: Waves,
  },
  {
    id: 'whitenoise',
    name: 'White Noise',
    file: 'https://www.youtube.com/watch?v=nMfPqeZjc2c',
    icon: Radio,
  },
]
