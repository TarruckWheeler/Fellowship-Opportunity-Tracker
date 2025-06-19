// Application data and state management
class FellowshipTracker {
    constructor() {
        this.opportunities = [
            {
                "id": 1,
                "programName": "Fisher Family Summer Fellows Program",
                "hostOrganization": "Stanford Freeman Spogli Institute",
                "type": "Fellowship", 
                "focusArea": "Democracy and Development",
                "location": "Stanford, CA",
                "duration": "July 20 - August 8, 2025",
                "applicationStatus": "Closed",
                "deadline": "2025-01-16",
                "stipend": "Not specified",
                "description": "Democracy and development focused summer program",
                "priority": "High",
                "applicationUrl": "https://cddrl.fsi.stanford.edu/summerfellows/apply"
            },
            {
                "id": 2,
                "programName": "CDDRL Pre- & Postdoctoral Fellowships",
                "hostOrganization": "Stanford Center on Democracy, Development and Rule of Law", 
                "type": "Fellowship",
                "focusArea": "Democracy, Development, Rule of Law",
                "location": "Stanford, CA",
                "duration": "2025-26 Academic Year",
                "applicationStatus": "Closed",
                "deadline": "2024-12-01",
                "stipend": "Not specified",
                "description": "Academic year fellowship for pre- and post-doctoral scholars",
                "priority": "High",
                "applicationUrl": "https://fsi.stanford.edu/news/call-applications-cddrl-2025-26-pre-postdoctoral-fellowships"
            },
            {
                "id": 3,
                "programName": "Cyber Capacity-Building Fellowship",
                "hostOrganization": "Cyber Diplomacy (Estonia)",
                "type": "Fellowship",
                "focusArea": "Cyber Policy, Cyber Diplomacy", 
                "location": "Estonia",
                "duration": "1-2 weeks annually",
                "applicationStatus": "TBD",
                "deadline": "TBD",
                "stipend": "Fully funded",
                "description": "For junior/mid-level cyber diplomats from Global South countries",
                "priority": "Medium",
                "applicationUrl": "https://cyberdiplomacy.ee/fellowship/"
            },
            {
                "id": 4,
                "programName": "Women in Cybersecurity Fellowship",
                "hostOrganization": "CRDF Global",
                "type": "Fellowship",
                "focusArea": "Cybersecurity Policy", 
                "location": "U.S. + Geneva",
                "duration": "March 7-29, 2025 + May 12-16, 2025",
                "applicationStatus": "Closed",
                "deadline": "2025-02-15",
                "stipend": "Fully funded",
                "description": "For mid-career cybersecurity professionals in government/academia/nonprofits",
                "priority": "Medium",
                "applicationUrl": "https://insights.crdfglobal.org/women-in-cybersecurity"
            },
            {
                "id": 5,
                "programName": "AI Policy Fellowship",
                "hostOrganization": "Institute for AI Policy and Strategy",
                "type": "Fellowship",
                "focusArea": "AI Policy",
                "location": "Washington, DC / Remote",
                "duration": "September 1 - November 21, 2025",
                "applicationStatus": "Closed",
                "deadline": "2025-03-15",
                "stipend": "$15,000-$22,000",
                "description": "3-month program for AI policy professionals",
                "priority": "High",
                "applicationUrl": "https://www.iaps.ai/fellowship"
            },
            {
                "id": 6,
                "programName": "Cyber Policy Leadership Institute",
                "hostOrganization": "POPVOX Foundation",
                "type": "Leadership Program",
                "focusArea": "Cyber Policy",
                "location": "Various",
                "duration": "Ongoing program",
                "applicationStatus": "Open",
                "deadline": "Rolling",
                "stipend": "Educational program",
                "description": "For students from historically marginalized groups in cyber policy",
                "priority": "Medium",
                "applicationUrl": "https://www.popvox.org/cpli"
            },
            {
                "id": 7,
                "programName": "#ShareTheMicInCyber Fellowship", 
                "hostOrganization": "New America",
                "type": "Fellowship",
                "focusArea": "Cybersecurity Policy",
                "location": "Remote/DC",
                "duration": "12 months",
                "applicationStatus": "Future",
                "deadline": "2025-12-01",
                "stipend": "Honorarium provided",
                "description": "Year-long research fellowship for mid-career cybersecurity professionals",
                "priority": "High",
                "applicationUrl": "http://newamerica.org/future-security/stmic-fellowship/fellowship-application/"
            },
            {
                "id": 8,
                "programName": "CSET Summer Internship Program",
                "hostOrganization": "Georgetown Center for Security and Emerging Technology",
                "type": "Internship",
                "focusArea": "Technology Policy, National Security",
                "location": "Washington, DC",
                "duration": "10 weeks (Summer)",
                "applicationStatus": "TBD",
                "deadline": "TBD",
                "stipend": "Competitive wage + housing/travel",
                "description": "For students from HBCUs and MSIs interested in tech policy",
                "priority": "High",
                "applicationUrl": "https://cset.georgetown.edu/cset-summer-internship-program/"
            },
            {
                "id": 9,
                "programName": "Brookings Institution Internships",
                "hostOrganization": "Brookings Institution",
                "type": "Internship",
                "focusArea": "Various policy areas including tech/governance",
                "location": "Washington, DC",
                "duration": "Fall 2025: Sep 15/29 - Dec 5/19, 2025",
                "applicationStatus": "Upcoming",
                "deadline": "2025-06-22",
                "stipend": "Paid internships",
                "description": "Research and policy internships across multiple programs",
                "priority": "High",
                "applicationUrl": "https://www.brookings.edu/careers/internships/"
            },
            {
                "id": 10,
                "programName": "Bipartisan Policy Center Internships",
                "hostOrganization": "Bipartisan Policy Center",
                "type": "Internship", 
                "focusArea": "Various policy areas",
                "location": "Washington, DC",
                "duration": "Fall/Spring: Part-time, Summer: Full-time",
                "applicationStatus": "Open",
                "deadline": "Rolling",
                "stipend": "$3,000 stipend (Fall/Spring)",
                "description": "Policy research and analysis internships",
                "priority": "Medium",
                "applicationUrl": "https://bipartisanpolicy.org/internships/"
            },
            {
                "id": 11,
                "programName": "World Bank Internship Program",
                "hostOrganization": "World Bank",
                "type": "Internship",
                "focusArea": "Development, Economics, Governance",
                "location": "Washington, DC + Country Offices",
                "duration": "May - August 2025",
                "applicationStatus": "Closed",
                "deadline": "2025-02-14",
                "stipend": "Hourly salary + up to $3,000 travel allowance",
                "description": "For graduate students in development-related fields",
                "priority": "High",
                "applicationUrl": "https://www.worldbank.org/en/about/careers/programs-and-internships/internship"
            },
            {
                "id": 12,
                "programName": "UN Data Governance and AI Governance Internship",
                "hostOrganization": "UN Office of Information and Communications Technology",
                "type": "Internship",
                "focusArea": "Data Governance, AI Governance",
                "location": "New York / Remote",
                "duration": "2-6 months",
                "applicationStatus": "TBD",
                "deadline": "TBD",
                "stipend": "Unpaid",
                "description": "Support data governance initiatives and AI compliance monitoring",
                "priority": "Medium",
                "applicationUrl": "https://untalent.org/jobs/intern-data-governance-and-ai-governance"
            },
            {
                "id": 13,
                "programName": "Google Public Policy Fellowship",
                "hostOrganization": "Google (various host organizations)",
                "type": "Fellowship",
                "focusArea": "Technology Policy",
                "location": "Washington, DC",
                "duration": "Summer 2025: June - August",
                "applicationStatus": "Closed",
                "deadline": "2025-04-04",
                "stipend": "$12,000 (full-time) / $6,000 (part-time)",
                "description": "Work with public interest organizations on tech policy issues",
                "priority": "High",
                "applicationUrl": "https://www.google.com/policyfellowship/usa/"
            },
            {
                "id": 14,
                "programName": "Microsoft Research AI & Society Fellows", 
                "hostOrganization": "Microsoft Research",
                "type": "Fellowship",
                "focusArea": "AI and Society Research",
                "location": "Various",
                "duration": "12 months",
                "applicationStatus": "TBD",
                "deadline": "TBD",
                "stipend": "Research support provided",
                "description": "Interdisciplinary AI research fellowship",
                "priority": "Medium",
                "applicationUrl": "https://www.microsoft.com/en-us/research/academic-program/ai-society-fellows/program-details/"
            },
            {
                "id": 15,
                "programName": "Berkman Klein Center Fellowship",
                "hostOrganization": "Harvard Berkman Klein Center",
                "type": "Fellowship",
                "focusArea": "Internet & Society",
                "location": "Cambridge, MA",
                "duration": "2025-26 Academic Year",
                "applicationStatus": "Closed",
                "deadline": "2025-04-30",
                "stipend": "Stipend provided",
                "description": "Academic, post-doc, and practitioner fellowships",
                "priority": "High",
                "applicationUrl": "https://cyber.harvard.edu/getinvolved/fellowships"
            },
            {
                "id": 16,
                "programName": "Carr Center Technology & Human Rights Fellowship",
                "hostOrganization": "Harvard Kennedy School Carr Center",
                "type": "Fellowship", 
                "focusArea": "Technology and Human Rights",
                "location": "Cambridge, MA",
                "duration": "September 1 - June 30 (2025-26)",
                "applicationStatus": "Closed",
                "deadline": "2025-01-05",
                "stipend": "Fellowship support provided",
                "description": "Exploring how technology shapes the future of human rights",
                "priority": "High",
                "applicationUrl": "https://www.hks.harvard.edu/centers/carr/publications/applications-open-carr-centers-2025-2026-fellowships"
            },
            {
                "id": 17,
                "programName": "Future of Privacy Forum AI Legislation Fellowship",
                "hostOrganization": "Future of Privacy Forum",
                "type": "Fellowship",
                "focusArea": "AI Policy and Legislation",
                "location": "Washington, DC",
                "duration": "1 year",
                "applicationStatus": "TBD",
                "deadline": "TBD",
                "stipend": "Fellowship stipend",
                "description": "Work on forefront of AI legislation and policy",
                "priority": "High",
                "applicationUrl": "https://fpf.org/law-policy-fellowship/"
            },
            {
                "id": 18,
                "programName": "Electronic Frontier Foundation Legal Internship",
                "hostOrganization": "Electronic Frontier Foundation",
                "type": "Internship",
                "focusArea": "Digital Rights, Technology Law",
                "location": "San Francisco, CA",
                "duration": "10-14 weeks (Summer), 10-12 weeks (Semester)",
                "applicationStatus": "Future",
                "deadline": "2026-02-15",
                "stipend": "Generally unpaid",
                "description": "Legal internship for civil liberties and technology issues",
                "priority": "Medium",
                "applicationUrl": "https://medialaw.unc.edu/job/electronic-frontier-foundation-legal-internship/"
            }
        ];

        this.userApplications = {};
        this.currentView = 'dashboard';
        this.filteredOpportunities = [...this.opportunities];
        this.selectedOpportunity = null;

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.renderDashboard();
        this.updateMetrics();
    }

    setupEventListeners() {
        // Navigation
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                this.switchView(e.target.dataset.view);
            });
        });

        // Search and filters
        document.getElementById('search-input')?.addEventListener('input', (e) => {
            this.filterOpportunities();
        });

        document.getElementById('type-filter')?.addEventListener('change', () => {
            this.filterOpportunities();
        });

        document.getElementById('status-filter')?.addEventListener('change', () => {
            this.filterOpportunities();
        });

        document.getElementById('priority-filter')?.addEventListener('change', () => {
            this.filterOpportunities();
        });

        // Modal
        document.getElementById('close-modal')?.addEventListener('click', () => {
            this.closeModal();
        });

        document.getElementById('save-opportunity')?.addEventListener('click', () => {
            this.saveOpportunityData();
        });

        // Close modal on outside click
        document.getElementById('opportunity-modal')?.addEventListener('click', (e) => {
            if (e.target.id === 'opportunity-modal') {
                this.closeModal();
            }
        });
    }

    switchView(viewName) {
        // Update navigation
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        document.querySelector(`[data-view="${viewName}"]`).classList.add('active');

        // Update views
        document.querySelectorAll('.view').forEach(view => {
            view.classList.remove('active');
        });
        document.getElementById(`${viewName}-view`).classList.add('active');

        this.currentView = viewName;

        // Render appropriate content
        switch(viewName) {
            case 'dashboard':
                this.renderDashboard();
                break;
            case 'browser':
                this.renderOpportunities();
                break;
            case 'tracker':
                this.renderTracker();
                break;
            case 'calendar':
                this.renderCalendar();
                break;
            case 'resources':
                // Resources view is static
                break;
        }
    }

    updateMetrics() {
        const statusCounts = this.getStatusCounts();
        const priorityCounts = this.getPriorityCounts();
        const upcomingDeadlines = this.getUpcomingDeadlines();

        document.getElementById('total-opportunities').textContent = this.opportunities.length;
        document.getElementById('open-opportunities').textContent = (statusCounts.Open || 0) + (statusCounts.Upcoming || 0);
        document.getElementById('high-priority').textContent = priorityCounts.High || 0;
        document.getElementById('upcoming-deadlines').textContent = upcomingDeadlines.length;
    }

    getStatusCounts() {
        return this.opportunities.reduce((acc, opp) => {
            const status = this.normalizeStatus(opp.applicationStatus);
            acc[status] = (acc[status] || 0) + 1;
            return acc;
        }, {});
    }

    normalizeStatus(status) {
        // Normalize status for consistent filtering and counting
        switch(status) {
            case 'Annual':
                return 'TBD';
            default:
                return status;
        }
    }

    getPriorityCounts() {
        return this.opportunities.reduce((acc, opp) => {
            acc[opp.priority] = (acc[opp.priority] || 0) + 1;
            return acc;
        }, {});
    }

    getUpcomingDeadlines() {
        const today = new Date('2025-06-19');
        const thirtyDaysFromNow = new Date(today);
        thirtyDaysFromNow.setDate(today.getDate() + 30);

        return this.opportunities.filter(opp => {
            if (opp.deadline === 'TBD' || opp.deadline === 'Rolling') return false;
            const deadline = new Date(opp.deadline);
            return deadline >= today && deadline <= thirtyDaysFromNow;
        });
    }

    renderDashboard() {
        this.renderUrgentDeadlines();
        this.updateMetrics();
    }

    renderUrgentDeadlines() {
        const upcomingDeadlines = this.getUpcomingDeadlines();
        const container = document.getElementById('urgent-deadlines');
        
        if (upcomingDeadlines.length === 0) {
            container.innerHTML = '<div class="empty-state"><p>No urgent deadlines in the next 30 days</p></div>';
            return;
        }

        container.innerHTML = upcomingDeadlines.map(opp => `
            <div class="urgent-item">
                <h4>${opp.programName}</h4>
                <p>Deadline: ${this.formatDate(opp.deadline)} - ${opp.hostOrganization}</p>
            </div>
        `).join('');
    }

    filterOpportunities() {
        const searchTerm = document.getElementById('search-input')?.value.toLowerCase() || '';
        const typeFilter = document.getElementById('type-filter')?.value || '';
        const statusFilter = document.getElementById('status-filter')?.value || '';
        const priorityFilter = document.getElementById('priority-filter')?.value || '';

        this.filteredOpportunities = this.opportunities.filter(opp => {
            const matchesSearch = opp.programName.toLowerCase().includes(searchTerm) ||
                                opp.hostOrganization.toLowerCase().includes(searchTerm) ||
                                opp.focusArea.toLowerCase().includes(searchTerm);
            
            const matchesType = !typeFilter || opp.type === typeFilter;
            
            // Normalize status for filtering
            const normalizedStatus = this.normalizeStatus(opp.applicationStatus);
            const matchesStatus = !statusFilter || normalizedStatus === statusFilter;
            
            const matchesPriority = !priorityFilter || opp.priority === priorityFilter.replace(' Priority', '');

            return matchesSearch && matchesType && matchesStatus && matchesPriority;
        });

        this.renderOpportunities();
    }

    renderOpportunities() {
        const container = document.getElementById('opportunities-list');
        
        if (this.filteredOpportunities.length === 0) {
            container.innerHTML = '<div class="empty-state"><h3>No opportunities found</h3><p>Try adjusting your search or filters</p></div>';
            return;
        }

        container.innerHTML = this.filteredOpportunities.map(opp => `
            <div class="opportunity-card priority-${opp.priority.toLowerCase()}" onclick="fellowshipTracker.openModal(${opp.id})">
                <div class="opportunity-header">
                    <h3 class="opportunity-title">${opp.programName}</h3>
                    <p class="opportunity-org">${opp.hostOrganization}</p>
                </div>
                
                <div class="opportunity-meta">
                    <span class="meta-tag">${opp.type}</span>
                    <span class="meta-tag">${opp.priority} Priority</span>
                    <span class="status status--${this.getStatusClass(opp.applicationStatus)}">${this.normalizeStatus(opp.applicationStatus)}</span>
                </div>
                
                <div class="opportunity-details">
                    <div class="detail-row">
                        <span class="detail-label">Focus:</span>
                        <span class="detail-value">${opp.focusArea}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Location:</span>
                        <span class="detail-value">${opp.location}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Deadline:</span>
                        <span class="detail-value">${opp.deadline}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Compensation:</span>
                        <span class="detail-value">${opp.stipend}</span>
                    </div>
                </div>
            </div>
        `).join('');
    }

    renderTracker() {
        const trackedApps = Object.keys(this.userApplications);
        const container = document.getElementById('tracked-applications');
        
        if (trackedApps.length === 0) {
            container.innerHTML = '<div class="empty-state"><h3>No applications tracked yet</h3><p>Browse opportunities and mark them as "Interested" to start tracking</p></div>';
            return;
        }

        container.innerHTML = trackedApps.map(id => {
            const opp = this.opportunities.find(o => o.id == id);
            const appData = this.userApplications[id];
            
            return `
                <div class="tracker-item">
                    <div class="tracker-header-row">
                        <div class="tracker-info">
                            <h3>${opp.programName}</h3>
                            <p class="text-muted">${opp.hostOrganization}</p>
                        </div>
                        <div class="tracker-status">
                            <span class="application-status status-${appData.status}">${this.capitalizeFirst(appData.status)}</span>
                        </div>
                    </div>
                    
                    <div class="detail-row">
                        <span class="detail-label">Deadline:</span>
                        <span class="detail-value">${opp.deadline}</span>
                    </div>
                    
                    ${appData.notes ? `
                        <div class="tracker-notes">
                            <h4>Notes:</h4>
                            <p>${appData.notes}</p>
                        </div>
                    ` : ''}
                    
                    <div class="opportunity-actions mt-16">
                        <button class="btn btn--sm btn--outline" onclick="fellowshipTracker.openModal(${opp.id})">
                            Update Status
                        </button>
                        <a href="${opp.applicationUrl}" target="_blank" class="btn btn--sm btn--primary">
                            Apply Now
                        </a>
                    </div>
                </div>
            `;
        }).join('');
    }

    renderCalendar() {
        const container = document.getElementById('calendar-timeline');
        const timelineItems = [];

        // Add deadlines and program dates
        this.opportunities.forEach(opp => {
            if (opp.deadline !== 'TBD' && opp.deadline !== 'Rolling') {
                timelineItems.push({
                    date: opp.deadline,
                    type: 'deadline',
                    title: `${opp.programName} - Application Deadline`,
                    organization: opp.hostOrganization
                });
            }
        });

        // Sort by date
        timelineItems.sort((a, b) => new Date(a.date) - new Date(b.date));

        container.innerHTML = `
            <div class="calendar-timeline">
                ${timelineItems.map(item => `
                    <div class="timeline-item">
                        <div class="timeline-dot ${item.type}" style="background-color: ${item.type === 'deadline' ? 'var(--color-error)' : 'var(--color-success)'}"></div>
                        <div class="timeline-content">
                            <div class="timeline-date">${this.formatDate(item.date)}</div>
                            <div class="timeline-title">${item.title}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    openModal(opportunityId) {
        this.selectedOpportunity = this.opportunities.find(opp => opp.id === opportunityId);
        const modal = document.getElementById('opportunity-modal');
        
        document.getElementById('modal-title').textContent = this.selectedOpportunity.programName;
        
        document.getElementById('modal-details').innerHTML = `
            <div class="detail-row">
                <span class="detail-label">Organization:</span>
                <span class="detail-value">${this.selectedOpportunity.hostOrganization}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Type:</span>
                <span class="detail-value">${this.selectedOpportunity.type}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Focus Area:</span>
                <span class="detail-value">${this.selectedOpportunity.focusArea}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Location:</span>
                <span class="detail-value">${this.selectedOpportunity.location}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Duration:</span>
                <span class="detail-value">${this.selectedOpportunity.duration}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Deadline:</span>
                <span class="detail-value">${this.selectedOpportunity.deadline}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Compensation:</span>
                <span class="detail-value">${this.selectedOpportunity.stipend}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Priority:</span>
                <span class="detail-value">${this.selectedOpportunity.priority}</span>
            </div>
            <div class="mt-16">
                <p><strong>Description:</strong> ${this.selectedOpportunity.description}</p>
            </div>
        `;

        // Set current application status and notes
        const currentApp = this.userApplications[opportunityId];
        if (currentApp) {
            document.getElementById('application-status').value = currentApp.status;
            document.getElementById('opportunity-notes').value = currentApp.notes || '';
        } else {
            document.getElementById('application-status').value = '';
            document.getElementById('opportunity-notes').value = '';
        }

        document.getElementById('apply-link').href = this.selectedOpportunity.applicationUrl;
        
        modal.classList.add('active');
    }

    closeModal() {
        document.getElementById('opportunity-modal').classList.remove('active');
        this.selectedOpportunity = null;
    }

    saveOpportunityData() {
        if (!this.selectedOpportunity) return;

        const status = document.getElementById('application-status').value;
        const notes = document.getElementById('opportunity-notes').value;

        if (status) {
            this.userApplications[this.selectedOpportunity.id] = {
                status: status,
                notes: notes,
                updatedAt: new Date().toISOString()
            };
        } else if (this.userApplications[this.selectedOpportunity.id]) {
            delete this.userApplications[this.selectedOpportunity.id];
        }

        this.closeModal();
        
        // Refresh current view if it's tracker or dashboard
        if (this.currentView === 'tracker') {
            this.renderTracker();
        } else if (this.currentView === 'dashboard') {
            this.renderDashboard();
        }
        
        // Update dashboard metrics
        this.updateMetrics();
    }

    getStatusClass(status) {
        const normalizedStatus = this.normalizeStatus(status);
        switch(normalizedStatus) {
            case 'Open': return 'success';
            case 'Upcoming': return 'warning';
            case 'Closed': return 'error';
            case 'TBD': 
            case 'Future': return 'info';
            default: return 'info';
        }
    }

    capitalizeFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    formatDate(dateString) {
        if (dateString === 'TBD' || dateString === 'Rolling') return dateString;
        
        try {
            const date = new Date(dateString);
            return date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long', 
                day: 'numeric'
            });
        } catch (e) {
            return dateString;
        }
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.fellowshipTracker = new FellowshipTracker();
});