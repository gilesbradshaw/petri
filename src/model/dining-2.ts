import Model from './Model'

const model: Model = {
  label: 'Two philosopher dining',
  nodes: [
    "fork_1_free",
    "fork_2_free",
    "left_hand_empty_1",
    "right_hand_empty_1",
    "eating_1",
    "thinking_1",
    "tlp_1",
    "trp_1",
    "tle_1",
    "tre_1",
    "left_hand_empty_2",
    "right_hand_empty_2",
    "eating_2",
    "thinking_2",
    "tlp_2",
    "trp_2",
    "tle_2",
    "tre_2",
  ],
  transitions: [
    "take_left_fork_1",
    "take_right_fork_1",
    "put_left_fork_1",
    "put_right_fork_1",
    "start_eating_1",
    "start_thinking_1",
    "take_left_fork_2",
    "take_right_fork_2",
    "put_left_fork_2",
    "put_right_fork_2",
    "start_eating_2",
    "start_thinking_2",
  ],
  edges: [
    ["put_left_fork_1", "fork_1_free"], //
    ["fork_1_free", "take_left_fork_1"], //
    ["put_left_fork_1", "left_hand_empty_1"],
    ["left_hand_empty_1", "take_left_fork_1"],
    ["put_right_fork_1", "fork_2_free"], ///
    ["fork_2_free", "take_right_fork_1"], ///
    ["put_right_fork_1", "right_hand_empty_1"],
    ["right_hand_empty_1", "take_right_fork_1"],
    ["take_left_fork_1", "tle_1"],
    ["tle_1", "start_eating_1"],
    ["take_right_fork_1", "tre_1"],
    ["tre_1", "start_eating_1"],
    ["start_thinking_1", "tlp_1"],
    ["tlp_1", "put_left_fork_1"],
    ["start_thinking_1", "trp_1"],
    ["trp_1", "put_right_fork_1"],
    ["eating_1", "start_thinking_1"],
    ["start_thinking_1", "thinking_1"],
    ["thinking_1", "start_eating_1"],
    ["start_eating_1", "eating_1"],

    ["put_left_fork_2", "fork_2_free"], ///
    ["fork_2_free", "take_left_fork_2"], ///
    ["put_left_fork_2", "left_hand_empty_2"],
    ["left_hand_empty_2", "take_left_fork_2"],
    ["put_right_fork_2", "fork_1_free"], //
    ["fork_1_free", "take_right_fork_2"], //
    ["put_right_fork_2", "right_hand_empty_2"],
    ["right_hand_empty_2", "take_right_fork_2"],
    ["take_left_fork_2", "tle_2"],
    ["tle_2", "start_eating_2"],
    ["take_right_fork_2", "tre_2"],
    ["tre_2", "start_eating_2"],
    ["start_thinking_2", "tlp_2"],
    ["tlp_2", "put_left_fork_2"],
    ["start_thinking_2", "trp_2"],
    ["trp_2", "put_right_fork_2"],
    ["eating_2", "start_thinking_2"],
    ["start_thinking_2", "thinking_2"],
    ["thinking_2", "start_eating_2"],
    ["start_eating_2", "eating_2"]

    
    
  ],
  markers: [
    'thinking_1',
    'thinking_2',
    'right_hand_empty_1',
    'right_hand_empty_2',
    'left_hand_empty_1',
    'left_hand_empty_2',
    'fork_1_free',
    'fork_2_free',
    
  ],
  states: [],
};

export default model;
