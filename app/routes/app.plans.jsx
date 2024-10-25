import { Layout, Page } from '@shopify/polaris'
import PlanHeader from '../components/plans/planheader/PlanHeader'
import MonthlySubs from '../components/plans/monthlysubscription/MonthlySubs'
import Yearlysubs from '../components/plans/yearlysubscription/Yearlysubs'
import { useCallback, useState } from 'react'

function Plans() {

    const [planMonthOrYearChoose,setPlanMonthOrYearChoose] = useState('monthly');
    const handlePlanMonthOrYearChoose = useCallback((value)=>{
        if(planMonthOrYearChoose === value) return
        setPlanMonthOrYearChoose(value);
    },[planMonthOrYearChoose]);

    return (
        <Page fullWidth>

            <Layout>

                <Layout.Section variant='fullWidth'>

                    <PlanHeader 
                    
                    handlePlanMonthOrYearChoose={handlePlanMonthOrYearChoose}
                    planMonthOrYearChoose={planMonthOrYearChoose}
                    
                    />
                </Layout.Section>

                <Layout.Section variant='fullWidth'>


                { planMonthOrYearChoose === 'monthly' &&

                   <MonthlySubs/>
                }

                   { planMonthOrYearChoose === 'yearly' &&
                        <Yearlysubs/>
                   }

                   

                </Layout.Section>





            </Layout>

        </Page>
    )
}

export default Plans