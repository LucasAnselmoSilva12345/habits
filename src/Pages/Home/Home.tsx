import { Header } from '../../components/Header/Header';
import { SummaryTable } from '../../components/SummaryTable/SummaryTable';
import '../../styles/global.css';
import '../../lib/dayjs';

export function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full max-w-5xl px-6 flex flex-col gap-16">
        <Header />
        <SummaryTable />
      </div>
    </div>
  );
}
