import dotenv from 'dotenv';
import { pushBartonMemory, getBartonMemory, BartonMemoryCube } from './src/memos/lib/memory/bartonDoctrineAdapter';

// Load environment variables
dotenv.config();

async function testBartonSetup() {
  console.log('🧪 Testing Barton Doctrine Setup...');
  console.log('🔗 Database URL:', process.env.DATABASE_URL ? 'Configured' : 'Missing');
  
  try {
    // Create a test memory cube
    const testCube: BartonMemoryCube = {
      agent_id: 'test_agent_001',
      agent_type: 'dev_environment',
      blueprint_id: 'barton_test_v1',
      spvpet: {
        subject: "Test Agent",
        predicate: "validated Barton Doctrine setup",
        verb: "tested",
        place: "development environment",
        event: "initial setup verification",
        time: new Date().toISOString()
      },
      stamped: {
        source: "test_script",
        time: new Date().toISOString(),
        agent: "test_agent_001",
        memory: "Successfully tested Barton Doctrine memory system with Neon database",
        purpose: "verify setup and connection",
        event: "initial_test",
        data: { test_type: "setup_verification", version: "1.0" }
      },
      file: 'test-barton-setup.ts',
      commit_hash: 'test_commit_hash',
      diff: 'test diff content',
      timestamp: new Date().toISOString(),
      doctrine_flags: ['BARTON_DOCTRINE', 'SPVPET_COMPLIANT', 'STAMPED_COMPLIANT'],
      memory_type: 'WorkingMemory',
      confidence: 100,
      priority: 10,
      annotations: {
        cursor_comment: 'Barton Doctrine setup test successful',
        barton_context: 'Initial setup verification',
        memory_chain: ['setup_start', 'database_connection', 'schema_creation'],
        related_memories: ['neon_connection', 'doctrine_validation']
      },
      tags: ['test', 'setup', 'barton_doctrine', 'neon'],
      entities: ['Test Agent', 'Neon Database', 'Barton Doctrine'],
      doctrine_version: '1.0',
      memory_quality_score: 100,
      retention_policy: 'short_term',
      access_control: 'private',
      validation_status: 'validated',
      compliance_checks: {
        spvpet_valid: true,
        stamped_valid: true,
        doctrine_compliant: true,
        neon_connected: true,
        test_passed: true
      },
      access_count: 0,
      performance_metrics: {
        25: 25,
        1024: 1024
      }
    };

    console.log('📝 Pushing test memory cube...');
    await pushBartonMemory(testCube);
    console.log('✅ Test memory cube pushed successfully!');

    console.log('📖 Retrieving test memory cubes...');
    const retrievedCubes = await getBartonMemory('test_agent_001');
    console.log(`✅ Retrieved ${retrievedCubes.length} memory cubes`);

    if (retrievedCubes.length > 0) {
      const latestCube = retrievedCubes[0];
      console.log('📊 Latest memory cube details:');
      console.log(`   - Agent ID: ${latestCube.agent_id}`);
      console.log(`   - Memory Type: ${latestCube.memory_type}`);
      console.log(`   - Doctrine Flags: ${latestCube.doctrine_flags.join(', ')}`);
      console.log(`   - Quality Score: ${latestCube.memory_quality_score}`);
      console.log(`   - SPVPET Subject: ${latestCube.spvpet.subject}`);
      console.log(`   - STAMPED Memory: ${latestCube.stamped.memory.substring(0, 50)}...`);
    }

    console.log('🎉 Barton Doctrine setup test completed successfully!');
    console.log('🚀 Ready for Cursor integration and constant memory operations.');

  } catch (error) {
    console.error('❌ Barton Doctrine setup test failed:', error);
    process.exit(1);
  }
}

// Run the test
testBartonSetup().catch(console.error); 