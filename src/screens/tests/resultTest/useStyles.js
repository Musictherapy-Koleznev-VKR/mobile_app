import {StyleSheet, Platform, Dimensions} from 'react-native';
import {ColorsStyles} from '../../../constants/ColorsStyles';

export const styles = StyleSheet.create({
  scroll: {
    marginTop: 10,
    width: '100%',
  },
  text_result: {
    color: '#000000',
    fontSize: 14,
  },
  viewBlock: {
    width: '100%',
    marginBottom: 12,
  },
  item_label: {
    fontSize: 19,
    marginLeft: 10,
  },
  item_item: {
    width: '100%',
    marginBottom: 12,
  },
  button_like: {
    position: 'absolute',
    right: 10,
    top: 10,
    opacity: 0.8,
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    marginTop: 10,
    alignItems: 'center',
    paddingBottom: 140,
  },
  block_root_v: {
    width: '100%',
    height: 200,
    borderRadius: 16,
    marginTop: 10,
    backgroundColor: 'rgba(198, 198, 198, 0.54)',
  },
  block_root_v_active: {
    zIndex: 3000,
    position: 'relative',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    // height: 600,
  },
  video_false: {
    borderRadius: 16,
    height: 200,
    width: '100%',
  },
  video_false_v: {
    width: '100%',
    height: 200,
  },
  video_true: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  item_video: {
    width: Dimensions.get('window').width - 40,
    height: 200,
    borderRadius: 16,
    marginTop: 10,
    backgroundColor: 'rgba(198, 198, 198, 0.54)',
  },
  block: {
    alignItems: 'center',
    width: '90%',
  },
  item_block_root: {
    marginBottom: 15,
  },
  item_block: {
    width: '100%',
    marginTop: 10,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 14,
  },
  item_block_active: {
    width: '100%',
    marginTop: 10,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 14,
    minHeight: 160,
    // height: 130,
  },
  block_v_button: {
    width: '100%',
    paddingTop: 3,
    paddingBottom: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  item_button: {
    width: '100%',
    paddingTop: 3,
    paddingBottom: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  item_name: {
    fontSize: 17,
    marginRight: 10,
  },
  item_text: {
    fontSize: 14,
  },
  item_scroll: {
    maxHeight: 80,
  },
  block_dalate: {
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 15,
    alignItems: 'center',
  },
  label_two: {
    width: '100%',
    fontSize: 15,
    marginTop: 15,
    marginBottom: 2,
  },
  label: {
    textAlign: 'center',
    fontSize: 22,
    marginTop: 20,
  },
  instruction: {
    // textAlign: 'center',
    fontSize: 16,
    width: '100%',
  },
  button_start_test: {
    width: '43%',
    height: 27,
    borderRadius: 6,
    backgroundColor: '#FCB900',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button_view_test: {
    width: '55%',
    height: 27,
    borderRadius: 6,
    backgroundColor: '#C4C4C4',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button_start_test_text: {
    fontSize: 12,
    color: '#000000',
  },
  button_view_test_text: {
    fontSize: 12,
    color: '#000000',
  },
  graph: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 4,
    paddingVertical: 10,
  },
  graph_lin: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 30,
  },
  graph_lin_block: {
    flex: 1,
    height: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  graph_lin_block__item: {
    height: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  graph_lin_block__text: {
    fontSize: 12,
    color: '#000000',
    width: 30,
    textAlign: 'right',
  },
  graph_res: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingRight: 30,
  },
  graph_res_item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  graph_res_item__text: {
    fontSize: 11,
    color: '#000000',
  },
});
