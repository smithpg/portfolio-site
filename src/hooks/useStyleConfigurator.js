import ReactDOM from 'react-dom';

import React, { useRef, useMemo, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import useBoundingRect from './useBoundingRect';
import useToggle from './useToggle';

const Configurator = ({ x, y, isVisible, activeStyle, setActiveStyle }) => {
  const configuratorStyle = {
    width: 300,
    boxShadow: '1px 1px 3px rgba(0,0,0,0.3)',
    padding: 20,
    background: 'white',
    position: 'fixed',
    top: y,
    left: x,
    opacity: isVisible ? 0.9 : 0,
    zIndex: 99,
    fontSize: '10px',
    pointerEvents: isVisible ? 'auto' : 'none',
  };

  const editorInputs = Object.entries(activeStyle).map(([key, val]) => {
    const bindings = {
      onChange: e => {
        let newValue;
        // Handle array values that ThemeUI uses for
        // breakpoints
        if (val instanceof Array) {
          newValue = e.target.value.match(/(\d\.?)+/g).map(Number);
        } else {
          newValue = e.target.value;
        }

        setActiveStyle({ ...activeStyle, [key]: newValue });
      },
      value: val,
    };

    return (
      <tr key={key}>
        <td style={{ padding: 10 }}>
          <label htmlFor={key}>{key}</label>
        </td>
        <td>
          <input {...bindings} name={key} />
        </td>
      </tr>
    );
  });

  return (
    <motion.table style={configuratorStyle} drag={true}>
      <tbody>{editorInputs}</tbody>
    </motion.table>
  );
};

export default function useStyleConfigurator(initialStyles) {
  const [ref, boundingRect] = useBoundingRect();
  const [activeStyle, setActiveStyle] = useState(initialStyles);
  const [configuratorProps, setConfiguratorProps] = useState({
    x: 0,
    y: 0,
    isVisible: false,
  });
  const [isVisible, toggleVisibility] = useToggle(false);

  useEffect(() => {
    boundingRect &&
      setConfiguratorProps(props => {
        const { x, y } = boundingRect;
        return { ...props, x, y };
      });
  }, [boundingRect]);

  // Attach style configurator to document
  const containerElement = useMemo(() => {
    if (typeof document === undefined) return {};
    const containerElement = document.createElement('div');
    containerElement.id = `style-configurator-${generateId()}`;

    document.querySelector('html').appendChild(containerElement);

    return containerElement;
  }, []);

  useEffect(() => {
    ReactDOM.render(
      <Configurator
        {...configuratorProps}
        isVisible={isVisible}
        activeStyle={activeStyle}
        setActiveStyle={setActiveStyle}
      />,
      containerElement
    );
  }, [configuratorProps, isVisible, activeStyle]);

  const configuratorBindings = {
    onClick: e => {
      console.log('CLICKED');
      toggleVisibility();
    },
    ref,
    sx: activeStyle,
  };

  return configuratorBindings;
}

let lastId = -1;
function generateId() {
  return ++lastId;
}
