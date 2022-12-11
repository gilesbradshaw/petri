import Model from './Model'

const model: Model = {
  label: 'A philosopher dining alone ',
  places: [
    "fork_1_free",
    "fork_2_free",
    "left_hand_empty",
    "right_hand_empty",
    "eating",
    "thinking",
    "tlp",
    "trp",
    "tle",
    "tre",
  ],
  transitions: [
    "take_left_fork",
    "take_right_fork",
    "put_left_fork",
    "put_right_fork",
    "start_eating",
    "start_thinking",
  ],
  arcs: [
    ["put_left_fork", "fork_1_free"],
    ["fork_1_free", "take_left_fork"],
    ["put_left_fork", "left_hand_empty"],
    ["left_hand_empty", "take_left_fork"],
    ["put_right_fork", "fork_2_free"],
    ["fork_2_free", "take_right_fork"],
    ["put_right_fork", "right_hand_empty"],
    ["right_hand_empty", "take_right_fork"],

    ["take_left_fork", "tle"],
    ["tle", "start_eating"],
    ["take_right_fork", "tre"],
    ["tre", "start_eating"],

    ["start_thinking", "tlp"],
    ["tlp", "put_left_fork"],
    ["start_thinking", "trp"],
    ["trp", "put_right_fork"],

    ["eating", "start_thinking"],
    ["start_thinking", "thinking"],
    ["thinking", "start_eating"],
    ["start_eating", "eating"]
    
    
  ],
  markers: [
    "thinking",
    "right_hand_empty",
    "fork_1_free",
    "left_hand_empty",
    "fork_2_free"
  ],
  states: [],
};

export default model;
