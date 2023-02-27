import React from "react";
import toValid from "../utils/toValid";
import Text from "../components/Text";
import Title from "../components/Title";
import Image from "../components/Image";
import SubscriptionForm from "../components/SubscriptionForm";
import Button from "../components/Button";
import Section from "../components/Section";
import Row from "../components/Row";
import Column from "../components/Column";

const components = {
  Text,
  Title,
  Image,
  SubscriptionForm,
  Button,
  Section,
  Row,
  Column,
};

const RenderComponents = ({ elements }) => {
  return (
    <>
      {elements?.map((element) => {
        const { id, content, type, name } = element;
        const Component = components[toValid(name)];
        return (
          <div key={id}>
            {Array.isArray(content) ? (
              <Component key={id} className={`${type}-${id}`}>
                <RenderComponents key={id} elements={content} />
              </Component>
            ) : (
              <Component key={id} className={`${type}-${id}`} element={element} />
            )}
          </div>
        );
      })}
    </>
  );
};

export default RenderComponents;
