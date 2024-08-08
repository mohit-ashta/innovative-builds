import React from 'react'
import Layout from '../../organisms/dashbaord/layout'
import { Counter } from '@/component/organisms/dashbaord/counter';
import { ConstructTeam } from '@/component/organisms/dashbaord/construct-team';
import { BuildList } from '@/component/organisms/dashbaord/build-list';


export const DashboardTemplate = () => {
  return (
    <Layout>
     <Counter/>
     <ConstructTeam/>
     <BuildList/>
    </Layout>
  )
}
