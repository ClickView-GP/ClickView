import React from "react";
import Image from "next/image";
import colors from "../lab/colors"; 

export default function DashboardPage() {
  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <Image src="/logo1.svg" width={60} height={60} alt="logo" />
        <div style={styles.profileSection}>
          <img src="https://via.placeholder.com/80" alt="Profile" style={styles.profileImage} />
          <h2 style={{color: colors.primary , alignItems: 'center'}}>Helmi Nofal</h2>
          <p style={{color: colors.primary , alignItems: 'center'}}>Front-End Developer</p>
        </div>
        <nav style={styles.navMenu}>
  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
    {['Dashboard', 'Interviews', 'Resumes', 'Settings'].map((item, i) => (
      <li key={i} style={styles.navItem}>
        <button style={{ 
          display: 'flex', 
          alignItems: 'center', 
          background: 'none', 
          border: 'none', 
          cursor: 'pointer',
          padding: 0,
          font: 'inherit',
          color: 'inherit' 
        }}>
          <span style={item === 'Dashboard' ? styles.activeDot : styles.dot}></span>
          <span style={item === 'Dashboard' ? styles.activeLink : styles.link}>{item}</span>
        </button>
      </li>
    ))}
  </ul>
</nav>

        <p style={styles.logout}>Log Out</p>
      </div>

      <div style={styles.mainContent}>
        <div style={styles.cardsRow}>
          <div style={styles.performanceCard}>
            <h3 style={styles.cardTitle}>Performance</h3>
            <div style={{alignItems: 'center'}}><span>75%</span> Success Rate</div>
            <div style={{alignItems: 'center'}}><span>25%</span> Failure Rate</div>
            <ul style={styles.skillList}>
              <li> Earned Asynchronous programming skill.</li>
              <li> Improved your explanation skill.</li>
              <li> Your Dart skills got backed down.</li>
            </ul>
          </div>

          <div style={styles.activityCard}>
            <h3 style={styles.cardTitle}>Activity</h3>
            <p style={{ color: 'white', marginBottom: '10px' }}>Your Data updates every day</p>
            <div style={styles.chartPlaceholder}>12500</div>
          </div>
        </div>

        <div style={styles.interviewSection} className="">
          <h2 className="text-3xl md:text-2xl font-bold text-black leading-tight">Interviews</h2>
          <p style={styles.interviewsSubtitle}>General Statistics and Records</p>
          <div style={styles.statsRow}>
            {[
              { title: 'Today', value: 5 },
              { title: 'Answers', value: 46 },
              { title: 'Time', value: '2.6 h' },
              { title: 'Highest Mark', value: 150 }
            ].map((stat, i) => (
              <div key={i} style={styles.statBox}>
                <div style={styles.statIcon}></div>
                <div style={styles.statText}>
                  <h4>{stat.title}</h4>
                  <p>{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    backgroundColor: '#e9edfb',
    minHeight: '100vh'
  },
  sidebar: {
    width: '240px',
    padding: '30px 20px',
    backgroundColor: '#fff',
    borderRight: '1px solid #ddd',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '40px',
    lineHeight: 1.2
  },
  profileSection: {
    textAlign: 'center',
    marginBottom: '40px'
  },
  profileImage: {
    borderRadius: '50%',
    width: '80px',
    height: '80px',
    marginBottom: '10px'
  },
  name: {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: 0
  },
  role: {
    fontSize: '14px',
    color: '#666',
    margin: 0
  },
  navMenu: {
    width: '100%',
    marginBottom: 'auto'
  },
  navItem: {
    display: 'flex',
    alignItems: 'center',
    margin: '10px 0',
    cursor: 'pointer'
  },
  dot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: 'transparent',
    marginRight: '10px'
  },
  activeDot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: '#7b61ff',
    marginRight: '10px'
  },
  link: {
    color: '#333',
    fontSize: '16px'
  },
  activeLink: {
    color: '#7b61ff',
    fontSize: '16px',
    fontWeight: 'bold'
  },
  logout: {
    marginTop: '40px',
    color: '#999',
    cursor: 'pointer'
  },
  mainContent: {
    flex: 1,
    padding: '40px'
  },
  cardsRow: {
    display: 'flex',
    gap: '30px',
    marginBottom: '40px'
  },
  performanceCard: {
    flex: 1,
    backgroundColor: '#7b61ff',
    color: '#fff',
    padding: '30px',
    borderRadius: '12px'
  },
  activityCard: {
    flex: 1,
    backgroundColor: '#1f2430',
    color: '#fff',
    padding: '30px',
    borderRadius: '12px'
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '20px'
  },
  percentages: {
    fontSize: '16px',
    marginBottom: '10px'
  },
  skillList: {
    marginTop: '20px',
    paddingLeft: '20px',
    listStyleType: 'disc'
  },
  chartPlaceholder: {
    backgroundColor: '#333',
    borderRadius: '10px',
    height: '160px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px'
  },
  interviewSection: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '12px',
    border: '1px solid #ccc'
  },
  interviewsTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '5px'
  },
  interviewsSubtitle: {
    color: '#666',
    marginBottom: '20px'
  },
  statsRow: {
    display: 'flex',
    gap: '20px'
  },
  statBox: {
    backgroundColor: '#1f2430',
    color: '#fff',
    flex: 1,
    borderRadius: '12px',
    padding: '20px',
    display: 'flex',
    alignItems: 'center'
  },
  statIcon: {
    backgroundColor: '#7b61ff',
    width: '30px',
    height: '30px',
    borderRadius: '6px',
    marginRight: '10px'
  },
  statText: {
    fontSize: '16px'
  }
};
