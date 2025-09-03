import { useOpenPanel } from '@openpanel/nextjs';

// Custom hook for OpenPanel tracking with common events
export function useOpenPanelTracking() {
  const op = useOpenPanel();

  const trackProjectView = (projectId: string, projectName: string) => {
    op.track('project_viewed', {
      projectId,
      projectName,
      timestamp: new Date().toISOString()
    });
  };

  const trackContactFormSubmission = (subject: string) => {
    op.track('contact_form_submitted', {
      subject,
      timestamp: new Date().toISOString()
    });
  };

  const trackPageView = (pageName: string) => {
    op.track('page_viewed', {
      pageName,
      timestamp: new Date().toISOString()
    });
  };

  const trackDownload = (fileType: string, fileName: string) => {
    op.track('file_downloaded', {
      fileType,
      fileName,
      timestamp: new Date().toISOString()
    });
  };

  return {
    ...op,
    trackProjectView,
    trackProjectView,
    trackContactFormSubmission,
    trackPageView,
    trackDownload
  };
}