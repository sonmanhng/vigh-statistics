document.addEventListener('DOMContentLoaded', () => {
    // Reveal animation
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((el, idx) => {
        setTimeout(() => {
            el.classList.add('reveal-active');
        }, Math.min(idx * 80, 500));
    });

    if (typeof courseInfo === 'undefined') {
        document.getElementById('site-title').innerText = "Data not found";
        return;
    }

    // Set Header
    document.getElementById('site-title').innerText = courseInfo.title;
    document.getElementById('site-subtitle').innerText = courseInfo.subtitle;
    document.getElementById('site-desc').innerText = courseInfo.description;
    document.title = courseInfo.title + " — VIGH";

    // Set Course Info List
    const infoList = document.getElementById('course-info-list');
    infoList.innerHTML = `
        <li><strong>Term</strong> ${courseInfo.term}</li>
        <li><strong>Time</strong> ${courseInfo.time}</li>
        <li><strong>Location</strong> ${courseInfo.location}</li>
    `;

    // Set Staff
    const staffList = document.getElementById('staff-list');
    courseStaff.forEach(staff => {
        staffList.innerHTML += `
            <div class="staff-card">
                <span class="staff-role">${staff.role}</span>
                <span class="staff-name">${staff.name}</span><br>
                <a href="mailto:${staff.email}">${staff.email}</a><br>
                <span>${staff.officeHours}</span>
            </div>
        `;
    });
    
    // Footer instructor
    document.getElementById('footer-instructor').innerText = courseInfo.instructor;

    // Set Announcements
    const annList = document.getElementById('announcement-list');
    if (courseAnnouncements && courseAnnouncements.length > 0) {
        courseAnnouncements.forEach(ann => {
            annList.innerHTML += `
                <div class="announcement-item">
                    <span class="announce-date">${ann.date}</span>
                    <p>${ann.content}</p>
                </div>
            `;
        });
    } else {
        annList.innerHTML = "<p>No recent announcements.</p>";
    }

    // Render Modules
    const container = document.getElementById('module-container');
    container.innerHTML = ''; 

    if (courseModules && courseModules.length > 0) {
        courseModules.forEach((module, index) => {
            const item = document.createElement('div');
            item.className = 'module-item reveal';
            
            setTimeout(() => {
                item.classList.add('reveal-active');
            }, 300 + index * 50);

            // Header
            const header = document.createElement('div');
            header.className = 'module-header';
            
            const title = document.createElement('h4');
            title.className = 'module-title';
            title.innerText = module.title;

            const badge = document.createElement('span');
            badge.className = `status-badge ${module.isPublished ? 'status-published' : 'status-draft'}`;
            badge.innerText = module.isPublished ? 'Published' : 'Upcoming';

            header.appendChild(title);
            header.appendChild(badge);

            // Desc
            const desc = document.createElement('p');
            desc.className = 'module-desc';
            desc.innerText = module.description;

            item.appendChild(header);
            item.appendChild(desc);

            // Resources
            if (module.isPublished && module.resources && module.resources.length > 0) {
                const resourcesDiv = document.createElement('div');
                resourcesDiv.className = 'resources-list';

                module.resources.forEach(res => {
                    const btn = document.createElement('a');
                    btn.href = res.url;
                    btn.target = "_blank";
                    btn.className = 'resource-link';
                    
                    // SVG Icons
                    let iconSvg = '';
                    if (res.type === 'video') {
                        iconSvg = `<svg class="resource-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`;
                    } else if (res.type === 'pdf') {
                        iconSvg = `<svg class="resource-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>`;
                    } else {
                        iconSvg = `<svg class="resource-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>`;
                    }

                    btn.innerHTML = `${iconSvg} ${res.title}`;
                    resourcesDiv.appendChild(btn);
                });

                item.appendChild(resourcesDiv);
            }

            container.appendChild(item);
        });
    }
});
