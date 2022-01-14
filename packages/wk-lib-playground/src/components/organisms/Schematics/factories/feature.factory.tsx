import { Container } from '../../../atoms/Container';
import React, { FC } from 'react';
import { Feature, FeatureApi, FeatureEvents } from '../../../atoms/Feature';
import Schematics from '../Schematics';
import { Navbar } from '../../../atoms/Navbar';
import { SchematicsTree } from '../SchematicsTree';
import { FeatureWithRelations } from '../../../../interfaces/feature-with-relations';

const { useGetQuery } = FeatureApi;

type Props = {
  schematic: SchematicsTree<FeatureEvents, FeatureWithRelations>;
};

const FeatureFactory: FC<Props> = ({ schematic }) => {
  const { handler } = schematic;
  const { data: metadata, isLoading } = useGetQuery({
    id: schematic.value.handlerId,
  });

  if (isLoading) {
    return <div>Loading..</div>;
  }
  return (
    <Container>
      <Navbar features={[{ ...metadata, selected: true }]} />
      <Feature handler={handler}>
        <Schematics id={schematic.value.childs[0].id} schematic={schematic} />
      </Feature>
    </Container>
  );
};

FeatureFactory.displayName = 'FeatureFactory';

export default FeatureFactory;
