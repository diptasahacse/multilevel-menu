import React from 'react';

interface IconProps {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const Icon: React.FC<IconProps> = ({ icon: IconComponent }) => {
  return <IconComponent />;
};

export default Icon;
