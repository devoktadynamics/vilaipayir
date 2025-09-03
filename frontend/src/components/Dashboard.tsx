import { ChevronRight, Sprout } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Dashboard: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-8 grid-rows-8 gap-4 font-outfit px-10">
      <div className="col-span-2 row-span-2 border border-slate-200 rounded-lg">
        <div className="flex flex-col gap-5  bg-gradient-to-b from-white to-green-100 p-5">
          <div className=" flex items-center justify-start gap-5">
            <div className=" p-2 bg-white rounded-lg border border-slate-200"><Sprout /> </div>
            <span> {t('Fields Overview')}</span>
          </div>
          <div>
            {t('Good')}
          </div>
        </div>
        <div className=" flex justify-between align-center p-3 cursor-pointer bg-gray-100 text-gray-800">
          <span>{t('View Field Reports')}</span>
          <ChevronRight />
        </div>
      </div>
      <div className="col-span-2 row-span-2 col-start-3 border border-slate-200 rounded-lg">
      <div className="flex flex-col gap-5  p-5">
          <div className=" flex items-center justify-start gap-5">
            <div className=" p-2 bg-white rounded-lg border border-slate-200"><Sprout /> </div>
            <span> {t('Fields Overview')}</span>
          </div>
          <div>
            {t('Good')}
          </div>
        </div>
        <div className=" flex justify-between align-center p-3 bg-gray-100 cursor-pointer">
          <span>{t('View Expense Reports')}</span>
          <ChevronRight />
        </div>
      </div>
      <div className="col-span-4 row-span-4 col-start-5 bg-red-400">3</div>
      <div className="col-span-4 row-span-2 row-start-3">4</div>
      <div className="col-span-5 row-span-4 row-start-5">5</div>
      <div className="col-span-3 row-span-4 col-start-6 row-start-5">6</div>
    </div>
  )
};
export default Dashboard;