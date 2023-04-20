import React from 'react';
import { Form } from 'react-bootstrap';

const VariationContainer = ({ variations, handleAttributeChange, selectedAttributes }) => {
  const attributeNames = [...new Set(variations.flatMap((variation) => variation.attributes.map((attr) => attr.name)))];

  const attributeOptions = attributeNames.reduce((options, name) => {
    const optionSet = new Set();
    variations.forEach((variation) => {
      const attribute = variation.attributes.find((attr) => attr.name === name);
      if (attribute) {
        optionSet.add(attribute.option);
      }
    });
    options[name] = Array.from(optionSet);
    return options;
  }, {});

  const getUniqueOptions = (name) => {
    return attributeOptions[name];
  };

  return (
    <div>
      {attributeNames.map((name) => (
        <div key={name}>
          <Form.Group>
            <Form.Label>{name}:</Form.Label>
            <div className="d-flex flex-row flex-wrap">
              {getUniqueOptions(name).map((option) => {
                const isSelected = selectedAttributes[name] === option;
                return (
                  <Form.Check
                    key={option}
                    type="radio"
                    id={`${name}-${option}`}
                    label={option}
                    name={name}
                    value={option}
                    checked={isSelected}
                    onChange={() => handleAttributeChange(name, option)}
                  />
                );
              })}
            </div>
          </Form.Group>
        </div>
      ))}
    </div>
  );
};

export default VariationContainer;
