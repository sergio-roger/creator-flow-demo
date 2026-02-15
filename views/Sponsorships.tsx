
import React from 'react';
import { MOCK_SPONSORSHIPS } from '../mockData';
import { Icons } from '../constants';

const statusTranslations: Record<string, string> = {
  'Negotiating': 'Negociando',
  'Contract Signed': 'Contrato Firmado',
  'Draft Sent': 'Borrador Enviado',
  'Approved': 'Aprobado',
  'Live': 'En Vivo',
  'Paid': 'Pagado'
};

const Sponsorships: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold text-slate-100">Gestión de Ingresos</h3>
          <p className="text-slate-500 text-sm">Rastrea contratos, entregables y pagos.</p>
        </div>
        <button className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 shadow-lg shadow-rose-500/20 transition-all">
          <Icons.Plus />
          Agregar Trato
        </button>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-800/50">
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Marca</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Monto</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Fecha Límite</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Estado</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Entregables</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {MOCK_SPONSORSHIPS.map((sponsor) => (
              <tr key={sponsor.id} className="hover:bg-slate-800/30 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-xs">
                      {sponsor.brand.charAt(0)}
                    </div>
                    <span className="font-semibold text-slate-100 text-sm">{sponsor.brand}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="font-bold text-slate-100 text-sm">${sponsor.amount}</span>
                  <span className="text-[10px] text-slate-500 ml-1">{sponsor.currency}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-slate-400 text-sm">{sponsor.deadline}</span>
                </td>
                <td className="px-6 py-4">
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase ${
                    sponsor.status === 'Contract Signed' ? 'bg-blue-500/10 text-blue-500' : 'bg-amber-500/10 text-amber-500'
                  }`}>
                    {statusTranslations[sponsor.status] || sponsor.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-1">
                    {sponsor.deliverables.map(d => (
                      <span key={d} className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded-md border border-slate-700">{d}</span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-slate-500 hover:text-slate-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Analytics Brief */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h4 className="font-bold text-slate-100 mb-4">Previsión de Pagos</h4>
          <div className="space-y-4">
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-400">Total Pendiente</span>
              <span className="text-amber-500 font-bold">$2,200.00</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-400">Recibido (Este Año)</span>
              <span className="text-green-500 font-bold">$18,450.00</span>
            </div>
            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
               <div className="h-full bg-green-500" style={{ width: '75%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsorships;
