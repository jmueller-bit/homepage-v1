// Trigger Netlify Deploy Hook
export async function triggerDeploy(): Promise<{ success: boolean; message: string }> {
  const deployHook = import.meta.env.NETLIFY_DEPLOY_HOOK;
  
  if (!deployHook) {
    return { success: false, message: 'Deploy hook not configured' };
  }

  try {
    const response = await fetch(deployHook, { method: 'POST' });
    
    if (response.ok) {
      return { success: true, message: 'Deployment triggered' };
    } else {
      return { success: false, message: `Deploy failed: ${response.status}` };
    }
  } catch (error: any) {
    return { success: false, message: error.message || 'Deploy error' };
  }
}
