// import {colorString} from '@medbikri/const/KeyValues';
import {colorString} from '../../consts';
import React, {useMemo, useState} from 'react';
import {
  TextInput,
  View,
  TextInputProps,
  StyleSheet,
  StyleProp,
  TextStyle,
} from 'react-native';
import {NativeSyntheticEvent, TextInputFocusEventData} from 'react-native';

// import {Colors} from './Colors';
// import Padding from './Padding';
// import {Typography} from './Typography';
import Padding from '../../ui/Padding';
import Typography from '../../ui/typography/Typography';
import {Colors} from '../../consts';

const INPUT_HEIGHT = 48;
const LABEL_HEIGHT = 20;
const CONTAINER_HEIGHT = INPUT_HEIGHT + 4 /* Padding */ + 2; /* Extra */
const ERROR_HINT_HEIGHT =
  16 /* Line Height */ + 2 /* Top Padding */ + 2; /* Bottom Padding */
const DEFAULT_COLORS = {
  color: Colors.dark,
  borderColor: Colors.grey,
  backgroundColor: Colors.white,
  textColor: Colors.dark,
};

export type InputModes = 'disabled' | 'focused' | 'blurred' | 'error';

export type InputProps = TextInputProps & {
  tip?: string;
  label?: string;
  disabled?: boolean;
  error?: boolean;
  errorHint?: string;
  required?: boolean;
  flex?: number;
  extraContent?: React.ReactNode;
  extraContentStyle?: StyleProp<TextStyle>;
  extraInputStyle?: StyleProp<TextStyle>;
  rightLabel?: string;
  capitalizeAllCharacters?: boolean;
};

const Input: React.FC<InputProps> = function ({
  tip,
  label,
  disabled = false,
  onFocus,
  onBlur,
  error,
  errorHint,
  required,
  extraContent,
  flex = undefined,
  value,
  extraContentStyle,
  extraInputStyle,
  rightLabel,
  capitalizeAllCharacters,
  ...props
}) {
  const [focus, setFocus] = useState(false);

  const height = useMemo(
    () =>
      CONTAINER_HEIGHT +
      (errorHint ? ERROR_HINT_HEIGHT : 0) +
      (label ? LABEL_HEIGHT : 0),
    [errorHint, label],
  );

  const {color, borderColor, backgroundColor, textColor} = useMemo(() => {
    const _c = {...DEFAULT_COLORS};
    if (error) {
      _c.color = Colors.red;
      _c.borderColor = Colors.red;
      _c.textColor = Colors.red;
      return _c;
    }
    if (disabled) {
      _c.color = Colors.grey;
      _c.backgroundColor = Colors.transparentGrey;
      _c.textColor = Colors.darkGrey;
      return _c;
    }
    if (focus) {
      _c.borderColor = Colors.blue;
      _c.color = Colors.blue;
      return _c;
    }
    return _c;
  }, [focus, error, disabled]);

  const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setFocus(true);
    if (onFocus) onFocus(e);
  };
  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setFocus(false);
    if (onBlur) onBlur(e);
  };

  return (
    <View
      style={{
        minHeight: height,
        height,
        maxHeight: height,
        flex: flex,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row'}}>
          {required && (
            <>
              <Typography typography="H6SemiBoldRed">*</Typography>
              <Padding width={2} />
            </>
          )}
          {label && (
            <Typography
              typography={`H6SemiBold${
                color === Colors.red
                  ? colorString.red
                  : color === Colors.blue
                  ? colorString.blue
                  : color === Colors.grey
                  ? colorString.grey
                  : colorString.dark
              }`}
              ellipsizeMode="tail"
              numberOfLines={1}>
              {label}
            </Typography>
          )}
          {/* tip && (
          <React.Fragment>
            <Padding width={12} />
            <ToolTip tip={tip} />
          </React.Fragment>
        ) */}
        </View>
        {rightLabel && (
          <Typography
            typography={`H6SemiBold${
              color === Colors.blue ? colorString.blue : colorString.dark
            }`}>
            {rightLabel}
          </Typography>
        )}
      </View>
      <Padding height={4} />
      <View style={{flexDirection: 'row', position: 'relative'}}>
        <TextInput
          // testID={props.testID}
          value={value?.toString() || ''}
          placeholderTextColor={disabled ? Colors.grey : Colors.darkGrey}
          selectionColor={borderColor}
          onFocus={handleFocus}
          onBlur={handleBlur}
          editable={!disabled}
          keyboardType={
            capitalizeAllCharacters ? 'visible-password' : props.keyboardType
          }
          style={[
            styles.input,
            {
              backgroundColor,
              borderColor,
              borderWidth: focus ? 1.5 : 1,
              color: textColor,
              textTransform: capitalizeAllCharacters ? 'uppercase' : 'none',
              ...extraInputStyle,
            },
          ]}
          {...props}
        />
        {Boolean(extraContent) && (
          <View
            style={{
              position: 'absolute',
              right: 0,
              // marginVertical: 'auto',
              bottom: 5,
              ...extraContentStyle,
            }}
            children={extraContent}
          />
        )}
      </View>
      {Boolean(errorHint) && (
        <>
          <Padding width={2} />
          <Typography
            typography={`PRegular${
              color === Colors.red ? colorString.red : colorString.dark
            }`}>
            {errorHint}
          </Typography>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {flexDirection: 'row', alignItems: 'flex-end'},
  input: {
    width: 0,
    height: 42,
    padding: 0,
    paddingHorizontal: 15,
    borderRadius: 6,
    flex: 1,
    minWidth: 20,
  },
  extraContent: {
    marginLeft: 8,
    justifyContent: 'center',
  },
});

export default Input;
