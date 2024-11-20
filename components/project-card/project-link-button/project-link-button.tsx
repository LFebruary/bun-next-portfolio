import IconButton from '@mui/material/IconButton';
import { ProjectLinkType } from '@/enums';
import { FC, memo, useMemo } from 'react';
import ProjectLinkButtonProps from './project-link-button.props';
import dynamic from 'next/dynamic';

const ArticleIcon = dynamic(() => import('@mui/icons-material/Article'));
const GitHubIcon = dynamic(() => import('@mui/icons-material/GitHub'));
const LanguageIcon = dynamic(() => import('@mui/icons-material/Language'));
const ShopIcon = dynamic(() => import('@mui/icons-material/Shop'));

const ProjectLinkButton: FC<ProjectLinkButtonProps> = memo(({ name, link }) => {
    const label = useMemo(() => {
        switch (link.type) {
            case ProjectLinkType.github:
                return `${name} - GitHub repository`;
            case ProjectLinkType.article:
                return `${name} - article`;
            case ProjectLinkType.googlePlay:
                return `${name} - Google Play listing`;
            case ProjectLinkType.web:
                return `${name} - Web link listing`;
            default:
                throw new Error('Invalid work project link type specified');
        }
    }, [name, link]);

    const tooltip = useMemo(() => {
        switch (link.type) {
            case ProjectLinkType.github:
                return `View ${name} GitHub repository`;
            case ProjectLinkType.article:
                return `View ${name} article`;
            case ProjectLinkType.googlePlay:
                return `View ${name} on Google Play store`;
            case ProjectLinkType.web:
                return `Visit ${name} website`;
            default:
                throw new Error('Invalid work project link type specified');
        }
    }, [link.type, name]);

    const icon = useMemo(() => {
        switch (link.type) {
            case ProjectLinkType.github:
                return <GitHubIcon />;
            case ProjectLinkType.article:
                return <ArticleIcon />;
            case ProjectLinkType.googlePlay:
                return <ShopIcon />;
            case ProjectLinkType.web:
                return <LanguageIcon />;
            default:
                throw new Error('Invalid work project link type specified');
        }
    }, [link]);

    return (
        <IconButton target="_blank" href={link.url} aria-label={label} size="large" title={tooltip}>
            {icon}
        </IconButton>
    );
});

ProjectLinkButton.displayName = 'ProjectLinkButton';

export default ProjectLinkButton;
