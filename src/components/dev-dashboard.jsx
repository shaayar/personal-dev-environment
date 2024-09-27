'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeIcon, CpuIcon, FolderIcon, GitBranchIcon, TerminalIcon, MenuIcon, PackageIcon, SettingsIcon } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

export function DevDashboard() {
  const [showNav, setShowNav] = useState(false);
  const [cpuUsage, setCpuUsage] = useState(0);
  const [memoryUsage, setMemoryUsage] = useState(0);
  const [diskUsage, setDiskUsage] = useState(0);
  const [showTerminal, setShowTerminal] = useState(false);
  const [showNewBranch, setShowNewBranch] = useState(false);
  const [showNewFile, setShowNewFile] = useState(false);
  const [showRunTests, setShowRunTests] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState([]);
  const [newBranchName, setNewBranchName] = useState('');
  const [newFileName, setNewFileName] = useState('');
  const [testOutput, setTestOutput] = useState([]);
  const [dependencies, setDependencies] = useState([]);
  const [showDependencies, setShowDependencies] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState({
    theme: 'dark',
    fontSize: '14px',
    tabSize: '2',
    autoSave: true
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (event.clientX >= window.innerWidth - 10) {
        setShowNav(true);
      } else if (event.clientX < window.innerWidth - 60) {
        setShowNav(false);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const updateResources = () => {
      setCpuUsage(Math.random() * 100);
      setMemoryUsage(Math.random() * 100);
      setDiskUsage(Math.random() * 100);
    };

    updateResources();
    const interval = setInterval(updateResources, 2000);

    return () => clearInterval(interval);
  }, []);

  const recentProjects = [
    { name: 'Project Alpha', slug: 'project-alpha' },
    { name: 'Web App Beta', slug: 'web-app-beta' },
    { name: 'Mobile App Gamma', slug: 'mobile-app-gamma' },
  ];

  const openTerminal = () => {
    setShowTerminal(true);
    setTerminalOutput(['Welcome to DevDash Terminal', 'Type your commands here...']);
  };

  const closeTerminal = () => {
    setShowTerminal(false);
    setTerminalOutput([]);
  };

  const createNewBranch = () => {
    setShowNewBranch(true);
  };

  const submitNewBranch = () => {
    if (newBranchName) {
      toast({
        title: "New Branch Created",
        description: `Branch '${newBranchName}' has been created successfully.`,
      });
      setNewBranchName('');
      setShowNewBranch(false);
    }
  };

  const createNewFile = () => {
    setShowNewFile(true);
  };

  const submitNewFile = () => {
    if (newFileName) {
      toast({
        title: "New File Created",
        description: `File '${newFileName}' has been created successfully.`,
      });
      setNewFileName('');
      setShowNewFile(false);
    }
  };

  const runTests = () => {
    setShowRunTests(true);
    setTestOutput(['Running tests...']);
    setTimeout(() => {
      setTestOutput(
        prev => [...prev, 'Test 1: Passed', 'Test 2: Passed', 'Test 3: Failed', 'All tests completed.']
      );
    }, 2000);
  };

  const fetchDependencies = () => {
    setShowDependencies(true);
    // Simulating API call to fetch dependencies
    setTimeout(() => {
      setDependencies([
        'react@17.0.2',
        'next@12.0.7',
        'typescript@4.5.4',
        '@types/react@17.0.38',
        'tailwindcss@3.0.7',
        'eslint@8.5.0'
      ]);
    }, 1000);
  };

  const openSettings = () => {
    setShowSettings(true);
  };

  const updateSetting = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    (<div className="flex min-h-screen bg-background">
      <main className="flex-1 p-4 lg:p-6 space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Welcome back, Developer</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Recent Projects</CardTitle>
              <CardDescription>Your most recently accessed projects</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {recentProjects.map((project, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <FolderIcon className="w-4 h-4" />
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-primary hover:underline">
                      {project.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>System Resources</CardTitle>
              <CardDescription>Current usage of your system resources</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>CPU Usage</span>
                  <span>{cpuUsage.toFixed(1)}%</span>
                </div>
                <Progress value={cpuUsage} />
              </div>
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Memory Usage</span>
                  <span>{memoryUsage.toFixed(1)}%</span>
                </div>
                <Progress value={memoryUsage} />
              </div>
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Disk Usage</span>
                  <span>{diskUsage.toFixed(1)}%</span>
                </div>
                <Progress value={diskUsage} />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Frequently used development actions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                <Button
                  variant="outline"
                  className="flex items-center gap-2"
                  onClick={openTerminal}>
                  <TerminalIcon className="w-4 h-4" />
                  Open Terminal
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center gap-2"
                  onClick={createNewBranch}>
                  <GitBranchIcon className="w-4 h-4" />
                  New Branch
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center gap-2"
                  onClick={createNewFile}>
                  <CodeIcon className="w-4 h-4" />
                  New File
                </Button>
                <Button variant="outline" className="flex items-center gap-2" onClick={runTests}>
                  <CpuIcon className="w-4 h-4" />
                  Run Tests
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center gap-2"
                  onClick={fetchDependencies}>
                  <PackageIcon className="w-4 h-4" />
                  Dependencies
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center gap-2"
                  onClick={openSettings}>
                  <SettingsIcon className="w-4 h-4" />
                  Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Development Environment</CardTitle>
            <CardDescription>Manage your development tools and settings</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="tools">
              <TabsList>
                <TabsTrigger value="tools">Tools</TabsTrigger>
                <TabsTrigger value="extensions">Extensions</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              <TabsContent value="tools" className="space-y-4">
                <h3 className="text-lg font-semibold">Installed Tools</h3>
                <ul className="space-y-2">
                  <li>Git v2.30.1</li>
                  <li>Node.js v14.15.5</li>
                  <li>npm v6.14.11</li>
                  <li>Python v3.9.1</li>
                </ul>
              </TabsContent>
              <TabsContent value="extensions" className="space-y-4">
                <h3 className="text-lg font-semibold">Installed Extensions</h3>
                <ul className="space-y-2">
                  <li>ESLint</li>
                  <li>Prettier</li>
                  <li>GitLens</li>
                  <li>Live Server</li>
                </ul>
              </TabsContent>
              <TabsContent value="settings" className="space-y-4">
                <h3 className="text-lg font-semibold">Environment Settings</h3>
                <ul className="space-y-2">
                  <li>Theme: {settings.theme}</li>
                  <li>Font Size: {settings.fontSize}</li>
                  <li>Tab Size: {settings.tabSize} spaces</li>
                  <li>Auto Save: {settings.autoSave ? 'On' : 'Off'}</li>
                </ul>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>
      <nav
        className={`fixed top-0 right-0 bottom-0 w-64 bg-background border-l transition-all duration-300 ease-in-out z-50 ${
          showNav ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <div className="h-full flex flex-col justify-center items-center gap-6">
          <Button
            variant="ghost"
            className="text-muted-foreground w-full justify-start pl-6">
            Projects
          </Button>
          <Button
            variant="ghost"
            className="text-muted-foreground w-full justify-start pl-6">
            Resources
          </Button>
          <Button
            variant="ghost"
            className="text-muted-foreground w-full justify-start pl-6">
            Settings
          </Button>
        </div>
      </nav>
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 right-4 z-50"
        onClick={() => setShowNav(!showNav)}>
        <MenuIcon className="h-4 w-4" />
      </Button>
      <Dialog open={showTerminal} onOpenChange={closeTerminal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Terminal</DialogTitle>
          </DialogHeader>
          <div
            className="bg-black text-green-400 p-4 rounded-md font-mono text-sm h-64 overflow-y-auto">
            {terminalOutput.map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
      <Dialog open={showNewBranch} onOpenChange={setShowNewBranch}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Branch</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="branch-name">Branch Name</Label>
              <Input
                id="branch-name"
                value={newBranchName}
                onChange={(e) => setNewBranchName(e.target.value)}
                placeholder="Enter new branch name" />
            </div>
            <Button onClick={submitNewBranch}>Create Branch</Button>
          </div>
        </DialogContent>
      </Dialog>
      <Dialog open={showNewFile} onOpenChange={setShowNewFile}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New File</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="file-name">File Name</Label>
              <Input
                id="file-name"
                value={newFileName}
                onChange={(e) => setNewFileName(e.target.value)}
                placeholder="Enter new file name" />
            </div>
            <Button onClick={submitNewFile}>Create File</Button>
          </div>
        </DialogContent>
      </Dialog>
      <Dialog open={showRunTests} onOpenChange={setShowRunTests}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Run Tests</DialogTitle>
          </DialogHeader>
          <div
            className="bg-black text-green-400 p-4 rounded-md font-mono text-sm h-64 overflow-y-auto">
            {testOutput.map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
      <Dialog open={showDependencies} onOpenChange={setShowDependencies}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Development Dependencies</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {dependencies.length === 0 ? (
              <p>Loading dependencies...</p>
            ) : (
              <ul className="space-y-2">
                {dependencies.map((dep, index) => (
                  <li key={index}>{dep}</li>
                ))}
              </ul>
            )}
          </div>
        </DialogContent>
      </Dialog>
      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Settings</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="theme">Theme</Label>
              <Select
                value={settings.theme}
                onValueChange={(value) => updateSetting('theme', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="font-size">Font Size</Label>
              <Select
                value={settings.fontSize}
                onValueChange={(value) => updateSetting('fontSize', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select font size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="12px">12px</SelectItem>
                  <SelectItem value="14px">14px</SelectItem>
                  <SelectItem value="16px">16px</SelectItem>
                  <SelectItem value="18px">18px</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="tab-size">Tab Size</Label>
              <Select
                value={settings.tabSize}
                onValueChange={(value) => updateSetting('tabSize', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select tab size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2">2 spaces</SelectItem>
                  <SelectItem value="4">4 spaces</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="auto-save"
                checked={settings.autoSave}
                onCheckedChange={(checked) => updateSetting('autoSave', checked)} />
              <Label htmlFor="auto-save">Auto Save</Label>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>)
  );
}