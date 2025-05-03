import React from 'react';

const DetectionLogs = () => {
  // Sample static log data — replace with real-time data as needed
  const logs = [
    {
      timestamp: '2025-05-03 14:32:10',
      classification: 'SQL Injection',
      policyUpdate: 'Blocked IP: 192.168.0.5',
    },
    {
      timestamp: '2025-05-03 15:10:44',
      classification: 'Cross-Site Scripting',
      policyUpdate: 'Added new XSS filtering rule',
    },
    {
      timestamp: '2025-05-03 15:22:01',
      classification: 'Brute Force Attack',
      policyUpdate: 'Enabled account lockout for 10 minutes',
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Detection Logs</h2>
      <div className="overflow-x-auto shadow rounded-lg">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="py-2 px-4 border-b text-left">Timestamp</th>
              <th className="py-2 px-4 border-b text-left">Attack Classification</th>
              <th className="py-2 px-4 border-b text-left">Automated Policy Update</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{log.timestamp}</td>
                <td className="py-2 px-4 border-b">{log.classification}</td>
                <td className="py-2 px-4 border-b">{log.policyUpdate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DetectionLogs;