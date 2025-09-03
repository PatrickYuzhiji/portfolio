import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const response = await fetch('https://api.openpanel.dev/track', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'openpanel-client-id': 'ab8321fc-befc-424d-bc4f-6f38dc642061',
        'openpanel-client-secret': 'sec_166c1f62a6ae5f85b745',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36'
      },
      body: JSON.stringify({
        type: 'track',
        payload: {
          name: 'test_event',
          properties: {
            __title: 'Testing OpenPanel Integration',
            __path: '/api/test-openpanel',
            __referrer: 'https://www.patrickyu.work',
            test_property: 'Hello from Portfolio API!'
          }
        }
      })
    });

    if (!response.ok) {
      throw new Error(`OpenPanel API error: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();

    return NextResponse.json({
      success: true,
      message: 'Test event sent to OpenPanel successfully!',
      openpanelResponse: result
    });

  } catch (error) {
    console.error('Error testing OpenPanel:', error);
    
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to send test event to OpenPanel',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}