#!/bin/bash

# MCP Server Management Script for AI Twin Tech Project

echo "🚀 AI Twin Tech - MCP Server Manager"
echo "=================================="

case "$1" in
  "autonomous")
    echo "🤖 Starting Autonomous Project Management Stack..."
    echo "   👨‍💼 Project Manager + 📋 Spec Workflow + 🛡️ Quality Guard + ⚡ Memory"
    npm run mcp:project-manager &
    npm run mcp:spec-workflow &
    npm run mcp:project-guard &
    npm run mcp:memory &
    wait
    ;;
  "project-manager")
    echo "👨‍💼 Starting Project Manager MCP Server..."
    npx mcp-project-manager
    ;;
  "project-guard")
    echo "🛡️ Starting Project Guard (QA & Architecture Validation)..."
    npx mcp-project-guard
    ;;
  "workflow")
    echo "🧠 Starting AI Expert Workflow Server..."
    npx ai-expert-workflow-mcp
    ;;
  "spec-workflow")
    echo "📋 Starting Spec-Driven Development Workflow..."
    npx spec-workflow-mcp
    ;;
  "spec-advanced")
    echo "🚀 Starting Advanced Spec Workflow with Dashboard..."
    npx @pimzino/spec-workflow-mcp
    ;;
  "filesystem")
    echo "Starting Filesystem MCP Server..."
    npx @modelcontextprotocol/server-filesystem /home/development/aitwintech
    ;;
  "memory")
    echo "Starting Ultra-Fast Memory Server (mem100x)..."
    npx mem100x
    ;;
  "memory-sqlite")
    echo "Starting SQLite Memory Server with Vector Search..."
    npx @iachilles/memento
    ;;
  "memory-nova")
    echo "Starting Nova Project Memory Server..."
    npx @nova-mcp/mcp-nova
    ;;
  "database")
    echo "Starting SQLite Database Server..."
    npx mcp-sqlite --db-path ./project.db
    ;;
  "thinking")
    echo "Starting Sequential Thinking MCP Server..."
    npx @modelcontextprotocol/server-sequential-thinking
    ;;
  "inspector")
    echo "Starting MCP Inspector..."
    npx @modelcontextprotocol/inspector --config ./mcp-config.json
    ;;
  "list")
    echo "Available MCP Servers:"
    echo ""
    echo "🤖 AUTONOMOUS PROJECT MANAGEMENT:"
    echo "  autonomous         - Start full autonomous stack (PM + QA + Memory)"
    echo "  project-manager    - Hierarchical project management & supervision"
    echo "  project-guard      - Architecture validation & code quality assurance"
    echo "  workflow           - AI expert workflow with task tracking"
    echo "  spec-workflow      - Requirements → design → implementation pipeline"
    echo "  spec-advanced      - Advanced spec workflow with real-time dashboard"
    echo ""
    echo "🗂️  CORE SERVERS:"
    echo "  filesystem    - File system operations and project access"
    echo "  database      - SQLite database operations"
    echo ""
    echo "🧠 MEMORY SERVERS:"
    echo "  memory        - Ultra-fast memory (66k+ entities/sec)"
    echo "  memory-sqlite - SQLite + vector search memory"
    echo "  memory-nova   - Project-specific context memory"
    echo ""
    echo "🛠️  UTILITY SERVERS:"
    echo "  thinking      - Sequential thinking/problem solving"
    echo "  inspector     - Debug MCP connections"
    echo ""
    echo "🚀 QUICK START AUTONOMOUS WORKFLOW:"
    echo "  1. npm run mcp:autonomous     # Start the full autonomous stack"
    echo "  2. Connect MCP servers to your AI client"
    echo "  3. Request AI to create a project plan"
    echo "  4. Approve plan → AI works with autonomous supervision!"
    echo ""
    echo "Usage: ./mcp-server.sh [server-name]"
    echo "Quick commands: npm run mcp:[server-name]"
    ;;
  *)
    echo "Usage: ./mcp-server.sh [autonomous|project-manager|project-guard|workflow|spec-workflow|spec-advanced|filesystem|memory|memory-sqlite|memory-nova|database|thinking|inspector|list]"
    echo "Quick start: ./mcp-server.sh autonomous"
    echo "Run './mcp-server.sh list' to see all available servers"
    ;;
esac
