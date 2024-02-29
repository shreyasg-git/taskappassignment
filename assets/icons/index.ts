import Calendar from './Calendar';
import Plus from './Plus';

import * as React from 'react';
import * as Svg from 'react-native-svg';

export type IconType =
  | 'calendar'
  | 'check'
  | 'chevron-down'
  | 'chevron-left'
  | 'chevron-right'
  | 'chevron-up'
  | 'delete'
  | 'down'
  | 'plus-ring'
  | 'plus'
  | 'x-circle'
  | 'x'
  | 'Bell';
export const findIconByName = (
  name: string,
): React.ComponentType<Svg.SvgProps> => {
  switch (name) {
    case 'calendar':
      return require('./Calendar').default;

    case 'check':
      return require('./Check').default;

    case 'chevron-down':
      return require('./ChevronDown').default;

    case 'chevron-left':
      return require('./ChevronLeft').default;

    case 'chevron-right':
      return require('./ChevronRight').default;

    case 'chevron-up':
      return require('./ChevronUp').default;

    case 'delete':
      return require('./Delete').default;

    case 'plus-ring':
      return require('./PlusRing').default;

    case 'plus':
      return require('./Plus').default;

    case 'x-circle':
      return require('./XCircle').default;

    case 'x':
      return require('./X').default;

    case 'Bell':
      return require('./Bell').default;

    default:
      return require('./QuestionMark').default;
  }
};

export {Calendar, Plus};
